import { Switch, Route } from 'react-router-dom';
import './App.css';
import { UserContext } from './hooks/UserContext';
import { AlertContext } from './hooks/AlertContext';
import useFindUser from './hooks/useFindUser';
import useAlert from './hooks/useAlert';
import Alert from './components/Alerts/Alert';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import PrivateRoute from './pages/PrivateRoute';
import NotFound from './pages/NotFound';

function App() {
  const { user, setUser, isLoading } = useFindUser(); 
  const { alertState, setAlertState, isOpen, setIsOpen, cancelRef, onClose } = useAlert();

  return (
    <UserContext.Provider value={{ user, setUser, isLoading }}>  
    <AlertContext.Provider value={{ alertState, setAlertState, isOpen, setIsOpen, cancelRef, onClose }}>
      <Switch>
        <Route path="/login" component={LogIn}/>
        <Route path="/register" component={Register}/>
        <PrivateRoute path="/home" component={Home} />
        <Route path="/" component={LogIn}/>
        <Route component={NotFound}/>
      </Switch>
      <Alert />
    </AlertContext.Provider> 
    </UserContext.Provider>
  );
}

export default App;
