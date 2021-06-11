const initState = {
  userlist: [],

  //Login page Authentication
  loginAction: false,
};

//Action Types
const USER_LOGIN = "USER_LOGIN";
//Actions
export function userLoginAction(payload) {
  //return { type: USER_LOGIN, payload: payload };
  return async (dispatch) => {
    // using try and catch for login Authentication
    try {
      const url = "http://localhost:8080/api/UserLogin";
      const requestBody = { ...payload };

      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });
      //Update the UI
      dispatch({ type: USER_LOGIN, payload: payload });
    } catch (error) {
      console.log(error);
    }

    //dispatch({ type: USER_LOGIN, payload: payload });
  };
}
//Redux logic
export function UserReducer(state = initState, action) {
  switch (action.type) {
    /*case LOGIN_ACTION:
      return { ...state, loginAction: true };*/
    case USER_LOGIN:
      //Logic
      return {
        ...state,
        userlist: [action.payload, ...state.userlist],
      };
    default:
      return state;
  }
}
