import { StyleSheet } from 'react-native'
import { black, white, red, lightGray } from '../utils/colors'

const text = StyleSheet.create({
  btnText: {
    color: white,
    fontSize: 20
  },
  hintText: {
    color: red,
    fontSize: 14
  },
  cardName: {
    fontSize: 27,
    color: black,
    textAlign: 'center'
  },
  cardAmount: {
    fontSize: 16,
    color: lightGray,
    textAlign: 'center'
  },
  titleText: {
    color: black,
    fontSize: 50,
    textAlign: 'center'
  },
  sequenceText: {
    alignSelf: 'flex-start',
    marginTop: 10,
    fontSize: 18
  },
  endText: {
    fontSize: 30
  }
})

export default text
