import React from 'react';

class CardRaritySelect extends React.Component {
    render() {
        return (
            <label for="card-rarity-select">Rarity:
                <select name="rarity" id="card-rarity-select">
                    <option value="1">Bronze</option>
                    <option value="2">Silver</option>
                    <option value="3">Gold</option>
                    <option value="4">Legendary</option>
                </select>
            </label>            
        )
    }
}

export default CardRaritySelect;