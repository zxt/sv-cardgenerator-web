import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

class CardCraftSelect extends React.Component {
    render() {
        return (
            <Select defaultValue="0" style={{ width: 150 }} name="clan" id="card-craft-select">
                <Option value="0">Neutral</Option>
                <Option value="1">Forestcraft</Option>
                <Option value="2">Swordcraft</Option>
                <Option value="3">Runecraft</Option>
                <Option value="4">Dragoncraft</Option>
                <Option value="5">Shadowcraft</Option>
                <Option value="6">Bloodcraft</Option>
                <Option value="7">Havencraft</Option>
                <Option value="8">Portalcraft</Option>
            </Select>
        )
    }
}

export default CardCraftSelect;