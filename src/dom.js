import { colors } from "./cards.js";

const suits = {
    clubs: "&clubs;",
    diamond: "&diams;",
    hearts: "&hearts;",
    spades: "&spades;",
};

const faces = {
    1: "A",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "J",
    12: "Q",
    13: "K",
};

/**
 * @param {import("./cards.js").Deck} deck
 */
export function createDeck(deck) {
    const element = document.createElement("article");
    element.classList.add("deck");

    element.innerHTML = `
    
    `;
}

/**
 * @param {import("./cards.js").Card} card
 * @param {boolean} top
 */
export function createCard(card, top) {
    const element = document.createElement("div");
    element.classList.add(card);

    let content = "";

    if (card.faceUp) {
        element.classList.add(colors[card.suit]);
        content = `${suits[card.suit]}${faces[card.face]}`;
    } else {
        content = `<span class="back"></span>`;
    }

    if (top) [element.classList.add("top")];

    element.innerHTML = content;
    return;
}
