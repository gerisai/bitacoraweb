import './App.css';
import Home from './components/Home';
import LogIn from './components/LogIn';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/login">
        <LogIn />
      </Route>
      <Route path="/home">
        <Home/>
      </Route> 
    </Switch>
  );
}

export default App;
