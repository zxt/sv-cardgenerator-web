import React from 'react';
import { Input } from 'antd';

class CardInput extends React.Component {
    render() {
        return (
            <Input
                type="text"
                style={{ width: 300 }}
                name={this.props.name}
                id={this.props.name}
                placeholder={this.props.placeholder}
            />
        )
    }
}

export default CardInput;