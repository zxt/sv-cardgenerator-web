import React from 'react';

class CardTextArea extends React.Component {
    render() {
        return (
            <div>
                <label for="card-text-textarea">Base Card Text:
                    <textarea name="skill_disc" id="card-text-textarea" placeholder="Base Card Text">
                    </textarea>
                </label>

                <label for="card-evotext-textarea">Evo Card Text:
                    <textarea name="evo_skill_disc" id="card-evotext-textarea" placeholder="Evo Card Text">
                    </textarea>
                </label>
            </div>
        )
    }
}

export default CardTextArea;