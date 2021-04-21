import React, {useEffect, useState} from 'react';
import { Select } from 'antd';

const { Option } = Select;

function CardRaritySelect(props) {
    const [rarity, setRarity] = useState("1");

    useEffect(() => {
        props.onChange("1");
    }, []);

    const handleChange = (newValue) => {
        setRarity(newValue);
        props.onChange(newValue);
    }

    return (
        <Select defaultValue={rarity} style={{ width: 120 }} name="rarity" id="card-rarity-select" onChange={handleChange}>
            <Option value="1">Bronze</Option>
            <Option value="2">Silver</Option>
            <Option value="3">Gold</Option>
            <Option value="4">Legendary</Option>
        </Select>
    )
}

export default CardRaritySelect;