import React from 'react';
import './Decks.css';
import { Deck } from '../../../../entities/Deck';
import { DeckComponent } from './DeckComponent/DeckComponent';
import { shuffle } from '../../../../utils/shuffleArray';

type DecksProps = {
    className?: string
}

type DecksState = {
    deckSelected: Deck,
    deckSelectedCounter: number,
    decks: Deck[]
}

export class Decks extends React.Component<DecksProps,DecksState> {

    constructor(props: any) {
        super(props);
        this.state = {
            deckSelectedCounter: 0,
            deckSelected: { id: 0, name: this.props.className, cards: [] },
            decks: []
        }

        this.prepareDeck = this.prepareDeck.bind(this);
        this.updateSelectedDecks = this.updateSelectedDecks.bind(this);
    }

    componentDidMount() {
        this.setState({
            decks: [
                { id: 1, name: 'Java', cards: [] },
                { id: 2, name: 'Web Services', cards: [] },
                { id: 3, name: 'Microservices', cards: [] },
            ]
        })
    }

    updateSelectedDecks(deckUpdated: Deck) {
        const decks = this.state.decks;
        let counter = 0;
        decks.forEach(deck => {
            if(deck.id === deckUpdated.id) deck.checkbox = !deckUpdated.checkbox;
            if(deck.checkbox) counter++;
        });
        this.setState({
            decks: decks,
            deckSelectedCounter: counter
        })
    }

    getDecks(): any[] {
        return this.state.decks.map(item => {
            return <DeckComponent key={item.id} deck={item} onCheckboxChange={this.updateSelectedDecks}/>
        });
    }

    prepareDeck() {
        
        const decksSelected = this.state.decks.filter(deck => {
            return deck.checkbox === true;
        });

        console.log(decksSelected);

        const deck: Deck = {
            id: 0,
            name: this.props.className,
            cards: []
        }

        this.setState(state => {
            for (const item of decksSelected) {
                console.log(item)
                deck.cards = deck.cards.concat(...item.cards);
            }
            console.log(deck)
            // deck.cards = shuffle(deck.cards);
            return {
                deckSelected: deck
            }
        });
    }

    render() {
        const decksJSX = this.getDecks();

        return (
            <React.Fragment>
                <div className="deck-header">
                    <span className="decks">Decks</span>
                    <div className="deck-round-bar deck-row-item">
                        <div className="icon-box">
                            <img src={process.env.PUBLIC_URL + '/assets/icons/play.png'} />
                        </div>
                        Study { 
                                this.state.deckSelectedCounter > 0 ? 
                                    (this.state.deckSelectedCounter + 
                                        (this.state.deckSelectedCounter > 1 ? ' decks' : ' deck' )) : undefined 
                            }
                    </div>
                    <button className="study-btn" type="button" onClick={this.prepareDeck}>Study</button>
                </div>

                {decksJSX}

            </React.Fragment>
        );
    }
}