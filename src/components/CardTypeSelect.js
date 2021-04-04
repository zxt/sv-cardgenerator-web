import React from 'react';

class CardTypeSelect extends React.Component {
    render() {
        return (
            <label for="card-type-select">Card Type:
                <select name="char_type" id="card-type-select">
                    <option value="1">Follower</option>
                    <option value="2">Amulet</option>
                    <option value="4">Spell</option>
                </select>
            </label>
        )
    }
}

export default CardTypeSelect;