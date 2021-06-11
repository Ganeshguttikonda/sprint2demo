const initState = {
  list: [],
};

//Action Types
const REGISTRATION_CREATE = "REGISTRATION_CREATE";
const REGISTRATION_LIST_BY_ID = "REGISTRATION_LIST_BY_ID";

//Action Functions
export function createRegistrationAction(payload) {
  //return { type: REGISTRATION_CREATE, payload: payload };
  //Connect to Sprint 1/ Backend Logic is written here

  return async (dispatch) => {
    const url = "http://localhost:8080/api/Registration";
    const requestBody = { ...payload };

    //Http client
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    //updating the UI
    dispatch({ type: REGISTRATION_CREATE, payload: payload });
  };
}

export function getResgisterListById(payload) {
  //return { type: REGISTRATION_LIST_BY_ID, payload: payload };

  return async (dispatch) => {
    const url = `http://localhost:8080/`;
    const response = await fetch(url);
    const employeeObj = await response.json();

    //this will update the UI
    dispatch({ type: REGISTRATION_LIST_BY_ID, payload: employeeObj });
  };
}

//Reducer Logic
export function RegistrationReducer(state = initState, action) {
  switch (action.type) {
    case REGISTRATION_CREATE:
      //Logic
      return { ...state, list: [action.payload, ...state.list] };

    case REGISTRATION_LIST_BY_ID:
      return state;

    default:
      return state;
  }
}
