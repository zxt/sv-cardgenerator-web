import React, {useState, useEffect} from 'react';
import { InputNumber } from 'antd';

function CardCostInput(props) {
    const [cost, setCost] = useState(0);

    useEffect(() => {
        props.onChange(0);
    }, []);

    const handleChange = (newValue) => {
        setCost(newValue);
        props.onChange(newValue);
    }

    return (
        <InputNumber type="number" name="cost" id="card-cost-input" min={0} defaultValue={cost} onChange={handleChange} />
    )
}

export default CardCostInput;