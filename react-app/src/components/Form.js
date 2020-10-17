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
        console.log(this.state);
    }

    render(){
        return (
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
                </form>
            </div>
        );
    }
}