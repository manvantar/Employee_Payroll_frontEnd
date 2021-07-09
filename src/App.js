import './scss/App.scss';
import Signup  from './pages/register'
import Login from './pages/login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClippedDrawer from './components/dashboard';
//import history from './history';

const App = () => {
  return (
    <Router >
      <div className="App">
          <Switch>
          <Route exact path='/' component={Signup} />
            <Route path='/register' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={ClippedDrawer} />
          </Switch>
      </div>
    </Router>
  )
}
export default App;
