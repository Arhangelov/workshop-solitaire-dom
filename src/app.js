import { Deck, Foundation, Pile, Stock, suits, Waste } from "./cards.js";
import { createDeck, dealDeck, shuffleDeck } from "./util.js";

start();

function start() {
    const deck = createDeck();
    shuffleDeck(deck);
    shuffleDeck(deck);
    shuffleDeck(deck);
    shuffleDeck(deck);
    shuffleDeck(deck);
    shuffleDeck(deck);

    const { index, state } = dealDeck(deck);

    console.log(deck);
}

/**
 * @param {import("./util.js").GameState} state
 */
function stateToBoard(state) {}
