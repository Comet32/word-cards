import { AsyncStorage } from "react-native";
import { CARDS_STORAGE_KEY, setDummyDate } from "./_cards";

export function fetchCardsResults() {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
    .then(setDummyDate)
}
