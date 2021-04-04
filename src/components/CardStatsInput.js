import React from 'react';

class CardStatsInput extends React.Component {
    render() {
        return (
            <div>
                <label>Base Stats:
                    <input type="number" name="atk" placeholder="Atk" min="0" />
                    <input type="number" name="life" placeholder="Def" min="0" />
                </label>
                <label>Evo Stats:
                    <input type="number" name="evo_atk" placeholder="Evo Atk" min="0" />
                    <input type="number" name="evo_life" placeholder="Evo Def" min="0" />
                </label>
            </div>      
        )
    }
}

export default CardStatsInput;