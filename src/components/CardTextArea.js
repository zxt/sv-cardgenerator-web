import React, { useEffect } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

function CardTextArea(props) {

    const handleChange = (newValue) => {
        props.onChange(newValue);
    }

    return (
        <TextArea
            rows={5}
            style={{ width: 300 }}
            name={props.name}
            id={props.htmlID}
            placeholder={props.placeholder} 
            onChange={handleChange}
        />
    )
}

export default CardTextArea;