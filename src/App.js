import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/writePost/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <>
      <Router>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/posts">
            <Home />
          </Route>
          <Route path="/register">
            {user ? <Home /> : <Registration />}
          </Route>
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
          <Route path="/post/:id">
            <Single />
          </Route>
          <Route path="/write">{user ? <Write /> : <Login />}</Route>
          <Route path="/settings">
            {user ? <Settings /> : <Login />}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
