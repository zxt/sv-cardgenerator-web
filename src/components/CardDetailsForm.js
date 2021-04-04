import React from 'react';
import CardTypeSelect from './CardTypeSelect.js';
import CardInput from './CardInput.js';
import CardCraftSelect from './CardCraftSelect.js';
import CardRaritySelect from './CardRaritySelect.js';
import CardStatsInput from './CardStatsInput.js';
import CardTextArea from './CardTextArea.js';
import CardImageInput from './CardImageInput.js';
import CardCostInput from './CardCostInput.js';

class CardDetailsForm extends React.Component {
    render() {
        return (
            <form>
                <CardTypeSelect />

                <CardInput label="Card Name:" name="card_name" placeholder="name" />

                <CardCraftSelect />

                <CardInput label="Trait:" name="tribe_name" placeholder="e.g., Commander, Machina, etc." />

                <CardRaritySelect />

                <CardCostInput />

                <CardStatsInput />

                <CardTextArea />

                <CardImageInput />
            </form>
        )
    }
}

export default CardDetailsForm;