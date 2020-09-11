import React from 'react';
import './Decks.css';

export class Decks extends React.Component {
    render() {
        const decks = [
            {  }
        ];
        const decksJSX = [];

        for (const item of decks) {
            
        }

        return (
            <React.Fragment>
                <div className="deck-row">
                    <div className="deck-checkbox deck-row-item">
                        <img src={process.env.PUBLIC_URL + '/assets/icons/checkmark-circle.png'} />
                    </div>
                    <span className="deck-row-item">Decks</span>
                    <div className="deck-round-bar deck-row-item">
                        <div className="icon-box">
                            <img src={process.env.PUBLIC_URL + '/assets/icons/play.png'} />
                        </div>
                        Study 3 decks
                    </div>
                    <div className="reorder-deck deck-row-item">
                        <img src={process.env.PUBLIC_URL + '/assets/icons/shuffle.png'}/>
                        <span>Reorder</span>
                    </div>
                    <div className="create-deck deck-row-item"></div>
                </div>
            </React.Fragment>
        );
    }
}