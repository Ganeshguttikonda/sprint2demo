import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Registration } from "./components/Registration";
import { Dashboard } from "./components/Dashboard";
import { AppNavBar } from "./common/AppNavBar";
import { User } from "./components/User";
import { AppNavBar1 } from "./common/AppNavBar1";
import { MyProfile } from "./components/MyProfile";
import { Home } from "./components/Home";
import { AppNavBar2 } from "./common/AppNavBar2";
import { Admin } from "./components/Admin";
import { Login } from "./components/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/registration">
          <AppNavBar />
          <Registration />
        </Route>

        <Route path="/userlogin">
          <AppNavBar />
          <User />
        </Route>

        <Route path="/login">
          <AppNavBar />
          <Login />
        </Route>

        <Route path="/adminlogin">
          <AppNavBar />
          <Admin />
        </Route>

        <Route path="/dashboard">
          <AppNavBar1 />
          <Dashboard />
        </Route>

        <Route path="/home">
          <AppNavBar />
          <Home />
        </Route>

        <Route path="/myprofile">
          <AppNavBar2 />
          <MyProfile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
