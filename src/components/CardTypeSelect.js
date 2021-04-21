import React, {useEffect, useState} from 'react';
import { Select } from 'antd';

const { Option } = Select;

function CardTypeSelect(props) {
    const [cardType, setCardType] = useState("1");

    useEffect(() => {
        props.onChange("1");
    }, [])

    const handleChange = (newValue) => {
        setCardType(newValue);
        props.onCardTypeChange(newValue);
        props.onChange(newValue);
    };

    return (
        <Select value={cardType} style={{ width: 100 }} name="char_type" id="card-type-select" onChange={handleChange}>
            <Option value="1">Follower</Option>
            <Option value="2">Amulet</Option>
            <Option value="4">Spell</Option>
        </Select>
    )
}

export default CardTypeSelect;