import React from 'react';

class CardInput extends React.Component {
    render() {
        return (
            <label>{this.props.label}
                <input type="text" name={this.props.name} placeholder={this.props.placeholder} />
            </label>
        )
    }
}

export default CardInput;