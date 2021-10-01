import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Adduser from './pages/AddUser';
import EditUser from './pages/EditUser';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/adduser" component={Adduser} />
        <Route exact path="/edituser/:id" component={EditUser} />
      </Switch>
    </div>
  );
}

export default App;
