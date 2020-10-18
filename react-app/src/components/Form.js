import React, {Component} from 'react';
import '../App.css';

const suggestedSong = "Song of the Sea";
const defaultMinutes = "3";

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            minutes: defaultMinutes,
            selectedFile: new File(["null"], "null.midi")
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.fileInput = null; //React.createRef();
    }

    isInputValid(){
        // this is hacky af but works lol
        let ret = this.state.name.match(/^[\^\-_. \w\d]+$/) &&
            this.state.minutes >= 1 && this.state.minutes <= 200 && this.state.minutes.match(/^\d{1,3}$/) &&
            this.fileInput;

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
                /*console.log("hope!")
                console.log(event.target.files)
                console.log(event.target.files[0])
                console.log(target.files[0])
                console.log("Hope lost!")
                console.log("" + name + " -> " + target.files[0])

                console.log("Golden test");
                this.setState({
                    [name]: target.files[0]
                });
                console.log(this.state);
                this.setState({
                    selectedFile: target.files[0]
                });
                console.log(this.state);
                this.setState({
                    "selectedFile": target.files[0]
                });
                console.log(this.state);
                this.setState({
                    "selectedFile": "eeeee"
                });
                console.log(this.state);*/

                console.log("Ticket:")
                console.log(this.fileInput)
                this.fileInput = target.files[0];
                console.log(this.fileInput);

                //console.log(this.state.selectedFile);
                //console.log(this.state.selectedFile.name);

                break;
        }


    }

    handleSubmit(event) {
        // TODO: call api
        event.preventDefault();
        console.log(`Selected file - ${this.fileInput.current.files[0].name}`);

        if(this.isInputValid()){ // Want to ignore possible DOM screwups and hacks

        }
    }

    fileTest(){
        /*console.log("1")
        console.log("" + this.fileInput)
        console.log("2")
        console.log("" + this.fileInput.current)
        console.log(`Selected file - ${this.fileInput.current.files[0].name}`);*/
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
                            <label className="label">Minutes (1-200)</label>
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
                            <label className="label">Input</label>
                            <div className="file is-primary">
                                <input
                                    type="file"
                                    name="selectedFile"
                                    ref={this.fileInput}
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