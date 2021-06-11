import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { AdminReducer } from "./AdminReducer";
import { RegistrationReducer } from "./RegistrationReducer";
import { UserReducer } from "./UserReducer";

const rootReducer = combineReducers({
  registration: RegistrationReducer,
  user: UserReducer,
  admin: AdminReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
