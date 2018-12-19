import { StyleSheet } from 'react-native'
import { black, red, green } from '../utils/colors'

const containers = StyleSheet.create({
  comCtn: {
    flex: 1
  },
  centerCtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardCtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    height: 200
  },
  btnCtn:{
    width: 143,
    height: 54,
    backgroundColor: black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 40
  },
  addBtnCtn: {
    width: 256,
    height: 69,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 13
  },
  startBtnCtn: {
    width: 256,
    height: 69,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: black
  },
  hintCtn:{
    alignSelf: 'flex-start',
    paddingLeft: 20,
    height: 30
  },
  inputCtn: {
    width: '95%',
    borderWidth: 1,
    borderColor: black,
    borderRadius: 4,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 4,
    paddingRight: 4,
    marginBottom: 10
  },
  quizBtn:{
    width: 257,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  correctBtn: {
    marginBottom: 13,
    backgroundColor: green
  },
  incorrectBtn: {
    backgroundColor: red,
    marginBottom: 30
  },
})

export default containers
