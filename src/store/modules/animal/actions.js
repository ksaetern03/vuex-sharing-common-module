import axiosDogs from "../../../api/axiosFakeDogs";
import axiosBirds from "../../../api/axiosFakeBirds";

const getAnimalList = (context, animalType) => {
  //pending
  context.commit("SET_LIST");
  //mocking ajax call
  if (animalType === 'dogs'){
    axiosDogs
    .get("https://localhost:3000/animals-list")
    .then(({ data }) => {
        context.commit("SET_LIST", data);
    })
    .catch(e => {
        context.commit("SET_LIST", e);
    });
  } else if (animalType === 'birds'){
    axiosBirds
    .get("https://localhost:3000/animals-list")
    .then(({ data }) => {
        context.commit("SET_LIST", data);
    })
    .catch(e => {
        context.commit("SET_LIST", e);
    });
  } 
};

export default {
  getAnimalList
};