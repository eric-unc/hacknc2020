import React, {Component} from 'react';
import '../App.css';

export default class Description extends Component {
    render(){
        return (
            <section className="section">
                <div className="notification is-danger">
                    <p><strong>Currently this website is a prototype!</strong> There are many issues.</p>
                    <p>This version of the website was created during HackNC. You can see our
                        submission <a href="https://devpost.com/software/mad-muzzic">here</a>.
                        Thank for using our service!</p>
                </div>
            </section>
        );
    }
}
