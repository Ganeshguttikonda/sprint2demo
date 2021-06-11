const initState = {
  adminlist: [],

  //Login page Authentication
  //loginAction: false,
};

//Action Types

const ADMIN_LOGIN = "ADMIN_LOGIN";

export function adminLoginAction(payload) {
  //return { type: ADMIN_LOGIN, payload: payload };
  return async (dispatch) => {
    const url = "http://localhost:8080/api/AdminLogin";
    const requestBody = { ...payload };

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    dispatch({ type: ADMIN_LOGIN, payload: payload });
  };
}

export function AdminReducer(state = initState, action) {
  switch (action.type) {
    case ADMIN_LOGIN:
      //logic
      return { ...state, adminlist: [action.payload, ...state.adminlist] };
    default:
      return state;
  }
}
