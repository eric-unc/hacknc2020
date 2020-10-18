import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';

const suggestedSong = "Song of the Sea";
const defaultMinutes = "3";

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            minutes: defaultMinutes,
            hasFile: false // This is just to refresh the DOM
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.fileInput = null;
    }

    isInputValid(){
        // this is hacky af but works lol
        let ret = this.state.name.match(/^[\^\-_.'"&() \w\d]+$/) &&
            this.state.minutes >= 1 && this.state.minutes <= 200 && this.state.minutes.match(/^\d{1,3}$/) &&
            this.fileInput !== null && this.fileInput.type === "audio/mid";

        return ret;
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        switch(target.type){
            case "text":
                this.setState({
                    [name]: value
                });

                break;

            case "file":
                this.fileInput = target.files[0];
                this.setState({
                    hasFile: true
                });

                break;
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log("About to test this!")
        if(this.isInputValid()){ // Want to ignore possible DOM screwups and hacks
            console.log("")
            const formData = new FormData();

            formData.append('name', this.state.name);
            formData.append('time', this.state.minutes);

            formData.append(
                "example-name", // TODO: change name?
                this.fileInput,
                this.fileInput.name
            );

            axios.post("./post-file", formData).then((res) => {
                console.log(res);
            });

            axios.post("./begin-transfer").then((res) => {
                console.log(res);
            })

            axios.post("./get-file").then((res) => {
                console.log(res);
            });
        }
    }

    render(){
        return (
            <section className="section">
                <div className="container">
                    <form className="box" onSubmit={this.handleSubmit}>
                        <div className="field">
                            <label className="label">Name (must be a valid file identifier)</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    placeholder={suggestedSong}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Minutes (1-200).
                                Note this is a prediction, it may be faster or slower depending on how
                                the server is doing.</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    name="minutes"
                                    value={this.state.minutes}
                                    onChange={this.handleInputChange}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Input (must be a <code>mid</code> file)</label>
                            <div className="file is-primary">
                                <input
                                    type="file"
                                    name="selectedFile"
                                    onChange={this.handleInputChange}/>
                            </div>
                        </div>

                        <div class="field">
                            <div className="control">
                                <button className="button is-link" type="submit" disabled={!this.isInputValid()}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}