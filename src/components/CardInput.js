import React, { useEffect } from 'react';
import { Input } from 'antd';

function CardInput(props) {
    useEffect(() => {
        props.onChange('');
    }, [])

    const handleChange = (newValue) => {
        props.onChange(newValue);
    }

    return (
        <Input
            type="text"
            style={{ width: 300 }}
            placeholder={props.placeholder}
            onChange={handleChange}
        />
    )
}

export default CardInput;