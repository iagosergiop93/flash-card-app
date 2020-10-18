import React from 'react';
import { Deck } from '../../../../../entities/Deck';
import './DeckComponent.css';

type DeckProps = {
    deck: Deck,
    onCheckboxChange: any
}

export class DeckComponent extends React.Component<DeckProps> {
    
    clickedCheckbox() {
        this.props.onCheckboxChange(this.props.deck);
    }

    render() {
        return (
            <div className="deck-row">
                <div className="deck-checkbox deck-row-item" onClick={() => this.clickedCheckbox()}>
                    { !this.props.deck.checkbox ? undefined: <img alt="checkbox-icon" src={process.env.PUBLIC_URL + '/assets/icons/checkmark-circle.png'} /> }
                </div>
                <span className="deck-row-item">{this.props.deck.name}</span>
                <div className="option-deck deck-row-item">
                    <img alt="shuffle-option" src={process.env.PUBLIC_URL + '/assets/icons/shuffle.png'}/>
                    <span>Reorder</span>
                </div>
                <div className="option-deck deck-row-item">
                    <img alt="view-option" src={process.env.PUBLIC_URL + '/assets/icons/eye.png'}/>
                    <span>View Deck</span>
                </div>
                <div className="option-deck deck-row-item">
                    <img alt="edit-option" src={process.env.PUBLIC_URL + '/assets/icons/pencil.png'}/>
                    <span>Edit Deck</span>
                </div>
                <button className="study-btn">Study</button>
            </div>
        );
    }
}