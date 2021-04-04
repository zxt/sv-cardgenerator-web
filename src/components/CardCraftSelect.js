import React from 'react';

class CardCraftSelect extends React.Component {
    render() {
        return (
            <label for="card-craft-select">Craft:
                <select name="clan" id="card-craft-select">
                    <option value="0">Neutral</option>
                    <option value="1">Forestcraft</option>
                    <option value="2">Swordcraft</option>
                    <option value="3">Runecraft</option>
                    <option value="4">Dragoncraft</option>
                    <option value="5">Shadowcraft</option>
                    <option value="6">Bloodcraft</option>
                    <option value="7">Havencraft</option>
                    <option value="8">Portalcraft</option>
                </select>
            </label>    
        )
    }
}

export default CardCraftSelect;