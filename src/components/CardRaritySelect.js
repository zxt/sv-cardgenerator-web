import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

class CardRaritySelect extends React.Component {
    render() {
        return (
            <Select defaultValue="1" style={{ width: 120 }} name="rarity" id="card-rarity-select">
                <Option value="1">Bronze</Option>
                <Option value="2">Silver</Option>
                <Option value="3">Gold</Option>
                <Option value="4">Legendary</Option>
            </Select>
        )
    }
}

export default CardRaritySelect;