export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECKS = 'ADD_DECKS'

export function receiveCardsAction(decks){
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function addCardsAction(deck){
  return {
    type: ADD_DECKS,
    deck
  }
}
