import React, {Component} from 'react';
import '../App.css';

const suggestedSong = "Song of the Sea";
const defaultMinutes = "3";

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            minutes: defaultMinutes
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.fileInput = React.createRef();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state); // TODO: call api
    }

    render(){
        return (
            <section className="section">
                <div className="container">
                    <form className="box" onSubmit={this.handleSubmit}>
                        <div className="field">
                            <label className="label">Name</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    value={this.state.value}
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
                                    value={this.state.value}
                                    onChange={this.handleInputChange}
                                    /*placeholder={defaultMinutes}*//>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Input</label>
                            <div className="file is-primary">
                                <input type="file" ref={this.fileInput}/>
                            </div>
                        </div>

                        <div class="field">
                            <div className="control">
                                <button className="button is-link" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}