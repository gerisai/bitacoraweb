import { useState, useRef, useEffect } from 'react';
import { Flex, Heading, Input, Button, InputGroup, InputRightElement } from '@chakra-ui/react';
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useHistory } from 'react-router-dom';
import { ErrorAlert } from '../components/Alerts/Alerts';
import  useAuth from '../hooks/useAuth';

const LogIn = ({ location }) => {
    // Error Alert
    const [isAlertOpen, setAlertIsOpen] = useState(false)
    const onAlertClose = () => setAlertIsOpen(false)
    const cancelAlertRef = useRef()
    const [ alert, setAlert ] = useState({title: '',message: ''});
    // Routing
    const history = useHistory();
    // User Auth
    const { loginUser, error, setError } = useAuth();
    // Form
    const [tempUser, setTempUser] = useState({ numEmpl: '', password: ''});
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (location.state && location.state.from === "Private") {
            setAlert({title: '¡Acceso denegado!', message: 'Necesitas iniciar sesión 🥲'});
            setAlertIsOpen(true);        
            history.replace('/login');
        }
        if(error) {
            setAlert({title: 'Error de autenticación', message: error})
            setAlertIsOpen(true);
            setError(null);
        }
    },[location,history,error,setError]);

    const handleShow = () => setShow(!show);

    const handleChange = (e) => {
        const newUser = {
            ...tempUser,    
            [e.target.name]: e.target.value
        };
        setTempUser(newUser);
    }
    
    const handleLogin = async () => {
        await loginUser(tempUser);
    }
    
    return (
    <Flex direction="row" height="100vh" alignItems="center" justifyContent="center" background="gray.200">
        <Flex direction="column" background="gray.100" p={12} rounded={6} align="center">
            <Heading mb={6}>Iniciar Sesión</Heading>
            <Input placeholder="Num. Empleado" variant="flushed" mb={3} name="numEmpl" type="number" colorScheme="black" onChange={handleChange}/>
            <InputGroup>
                <Input placeholder="Contraseña" variant="flushed" mb={6} name="password" type={show ? "text" : "password"} onChange={handleChange}/>
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShow}>
                        {show ? <BiHide/>: <BiShow/>}
                    </Button>
                </InputRightElement>
            </InputGroup>
            <Button colorScheme="teal" onClick={handleLogin} size="lg">Entrar</Button>
            <Link to="/register"><Button colorScheme="blue" my={2} size="sm">Registro</Button></Link>
        </Flex>
        <ErrorAlert id="errorAlert" isOpen={isAlertOpen} onClose={onAlertClose} cancelRef={cancelAlertRef} title={alert.title} message={alert.message}/>
    </Flex>
    );
}

export default LogIn;