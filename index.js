import { createStore } from "https://unpkg.com/browse/redux@4.0.5/es/redux.mjs";

const BUTTON_CLICKED = "BUTTON_CLICKED";
const DIV_VISIBLE = "DIV_VISIBLE";

const initialState = {
  buttonClicked: "no",
  divVisible: "no",
};
//Reducer - function that creates state
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case BUTTON_CLICKED:
      //return Object.assign({}, state, { buttonClicked: "yes" }); //Object merged
      return { ...state, buttonClicked: "yes" }; //Another way
    case DIV_VISIBLE:
      return Object.assign({}, state, { divVisible: "yes" });
    default:
      return state;
  }
}
const store = createStore(rootReducer);

function buttonClicked(payload) {
  return {
    type: BUTTON_CLICKED,
  };
}

function divVisible() {
  return {
    type: DIV_VISIBLE,
  };
}

const button = document.getElementById("my-button");
button.addEventListener("click", function () {
  store.dispatch(buttonClicked(this));
  store.dispatch(divVisible());
});

store.subscribe(function () {
  if (store.getState().divVisible === "yes") {
    const div = document.getElementById("my-div");
    div.style.display = "block";
  }
});
/*
Dispatch - Changes the state by sending message to reducer
Action - JS object with type and payload
Subscribe - Listing to state changes
*/
