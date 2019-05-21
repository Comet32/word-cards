import { RECEIVE_DECKS, ADD_DECKS, ADD_CARD } from '../actions'

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
    case ADD_CARD: {
      const { title, question, answer } = action
      return {
        ...state,
        [title]: {
          ...state[title],
          questions: [...state[title].questions, { question, answer }]
        }
      }
    }
    default:
      return state
  }
}
