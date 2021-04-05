import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

class CardTextArea extends React.Component {
    render() {
        return (
            <TextArea rows={5} style={{ width: 300 }} name={this.props.name} id={this.props.htmlID} placeholder={this.placeholder} />
        )
    }
}

export default CardTextArea;