export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECKS = 'ADD_DECKS'
export const ADD_CARD = 'ADD_CARD'

export function receiveCardsAction(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function addCardsAction(deck) {
  return {
    type: ADD_DECKS,
    deck
  }
}

export function addCardAction(title, question, answer) {
  return {
    type: ADD_CARD,
    title,
    question,
    answer
  }
}
