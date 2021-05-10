import React from 'react';
import { Image } from 'antd';
import CardDetailsForm from './components/CardDetailsForm.js';
import 'antd/dist/antd.css';
import './styles.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            generatedCard: ''
        };

        this.handleGenerateCard = this.handleGenerateCard.bind(this);
    }

    handleGenerateCard(imgSrc) {
        this.setState({
            generatedCard: imgSrc
        });
    }

    render() {
        return (
            <div>
                <CardDetailsForm onGenerateCard={this.handleGenerateCard} />
                <img src={this.state.generatedCard} />
            </div>
        )
    }
}

export default App;