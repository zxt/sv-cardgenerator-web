import React from 'react';
import { InputNumber } from 'antd';

class CardCostInput extends React.Component {
    render() {
        return (
            <InputNumber type="number" name="cost" id="card-cost-input" min={0} defaultValue={0} />
        )
    }
}

export default CardCostInput;