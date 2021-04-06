import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

class CardTypeSelect extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.props.onCardTypeChange(value);
    }

    render() {
        return (
            <Select defaultValue="1" style={{ width: 100 }} name="char_type" id="card-type-select" onChange={this.handleChange}>
                <Option value="1">Follower</Option>
                <Option value="2">Amulet</Option>
                <Option value="4">Spell</Option>
            </Select>
        )
    }
}

export default CardTypeSelect;