import React from 'react';

class CardCostInput extends React.Component {
    render() {
        return (
            <label>Cost:
                <input type="number" name="cost" placeholder="pp cost" min="0" />
            </label>
        )
    }
}

export default CardCostInput;