import Login from "./screens/login";
import { useEffect } from "react";
import { LoginData } from "./data/LoginData";
import "semantic-ui-css/semantic.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Profile from "./screens/profile";

const isLogin = () => {
  if (localStorage.getItem("loggedInUser")) return true;
  return false;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  // Show the component only when the user is logged in
  // Otherwise, redirect the user to /signin page
  <Route
    {...rest}
    render={(props) =>
      isLogin() ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default function App() {
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(LoginData));
  }, []);

  return (
    <Router>
      <Switch>
        <PrivateRoute component={Profile} path="/profile" />
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
    // <div className="App">
    //   <div style={{ maxWidth: "300px", margin: "0 auto", padding: "30px 0" }}>
    //     <Login />
    //   </div>
    // </div>
  );
}
