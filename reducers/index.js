import { RECEIVE_DECKS, ADD_DECKS } from '../actions'

export default function reducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...action.decks
      }
    case ADD_DECKS: {
      return {
        ...state,
        [action.deck]: {
          title: action.deck,
          questions: []
        }
      }
    }
    default:
      return state
  }
}
