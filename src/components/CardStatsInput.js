import React from 'react';
import { InputNumber } from 'antd';

class CardStatsInput extends React.Component {
    render() {
        return (
            <div>
                <InputNumber
                    type="number"
                    id={this.props.name1}
                    name={this.props.name1}
                    placeholder={this.props.placeholder1}
                    min={0}
                    disabled={this.props.cardType == 1 ? false : true}
                />
                <InputNumber
                    type="number"
                    id={this.props.name2}
                    name={this.props.name2}
                    placeholder={this.props.placeholder2}
                    min={0}
                    disabled={this.props.cardType == 1 ? false : true}
                />
            </div>
        )
    }
}

export default CardStatsInput;