import React, {Component} from 'react';
import '../App.css';

export default class Description extends Component {
    render(){
        return (
            <section className="section">
                <div className="content">
                    <p>Want custom music generated for free? Give us up to 10 midi files and we will put them through a LSTM
                        (Long Short-Term Memory) neural network. Give your beats a name, and tell us how long you want the
                        network to train. We recommend training as long as possible, preferably for 30 minutes or more. We also recommend
                        having all your midi files use the same instruments and same time signature. Once your custom music
                        is ready a link will appear above. Click the link to download your file. Enjoy!</p>
                </div>
            </section>
        );
    }
}
