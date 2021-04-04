import React from 'react';

class CardImageInput extends React.Component {
    render() {
        return (
            <div>
                <label>Card Image:
                    <input type="file" accept=".jpg, .jpeg, .png" />
                </label>
                <label>Background Image:
                    <input type="file" accept=".jpg, .jpeg, .png" />
                </label>
            </div>
        )
    }
}

export default CardImageInput;