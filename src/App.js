import { Switch, Route } from 'react-router-dom';
import './App.css';
import { UserContext } from './hooks/UserContext';
import useFindUser from './hooks/useFindUser';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import PrivateRoute from './pages/PrivateRoute';

function App() {
  const { user, setUser, isLoading } = useFindUser(); 

  return (
    <UserContext.Provider value={{ user, setUser, isLoading }}>
      <Switch>
        <Route path="/login" component={LogIn}/>
        <Route path="/register" component={Register}/>
        <PrivateRoute path="/home" component={Home} />
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
