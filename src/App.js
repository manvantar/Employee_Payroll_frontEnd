import "./scss/App.scss";
import Signup from "./pages/register";
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import dashboard from "./components/dashboard";

/**
 * @description App functional component to return multiple componets on routing
 * @return router with multiple components on routing
 */
const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route path="/register" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={dashboard} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
