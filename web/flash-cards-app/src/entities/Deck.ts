import { Card } from "./Card";

export interface Deck {
    id: number;
    name?: string;
    cards: Card[];
    checkbox?: boolean;
}