import React from 'react';
import { Deck } from '../../../../entities/Deck';
import './DeckComponent.css';

type DeckProps = {
    deck: Deck,
    onCheckboxChange: any
}

export function DeckComponent(props: DeckProps) {
    
    const clickedCheckbox = () => {
        props.onCheckboxChange(props.deck);
    }

    return (
        <div className="deck-row">
            <div className="deck-checkbox deck-row-item" onClick={() => clickedCheckbox()}>
                { !props.deck.checkbox ? undefined: <img alt="checkbox-icon" src={process.env.PUBLIC_URL + '/assets/icons/checkmark-circle.png'} /> }
            </div>
            <span className="deck-row-item">{props.deck.name}</span>
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