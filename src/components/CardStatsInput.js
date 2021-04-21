import React, { useEffect } from 'react';
import { InputNumber } from 'antd';

function CardStatsInput(props) {
    useEffect(() => {
        props.onChange({
            [props.name1]: '',
            [props.name2]: '',
        });
    }, []);

    const handleChange1 = (newValue) => {
        props.onChange({
            ...props.value,
            [props.name1]: newValue,
        });
    };

    const handleChange2 = (newValue) => {
        props.onChange({
            ...props.value,
            [props.name2]: newValue,
        });
    };

    return (
        <div>
            <InputNumber
                type="number"
                id={props.name1}
                name={props.name1}
                placeholder={props.placeholder1}
                min={0}
                disabled={props.cardType == 1 ? false : true}
                onChange={handleChange1}
            />
            <InputNumber
                type="number"
                id={props.name2}
                name={props.name2}
                placeholder={props.placeholder2}
                min={0}
                disabled={props.cardType == 1 ? false : true}
                onChange={handleChange2}
            />
        </div>
    )
}

export default CardStatsInput;