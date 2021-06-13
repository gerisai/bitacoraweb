import { useState, useEffect, useRef} from 'react';
import { Flex, Heading, Input, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ErrorAlert } from '../components/Alerts/Alerts';
import  useAuth from '../hooks/useAuth';

const Register = () => {
    // User form
    const [tempUser, setTempUser] = useState({ numEmpl: '', password: ''});
    // Auth
    const { registerUser, error, setError } = useAuth();
    // Error Alert
    const [isAlertOpen, setAlertIsOpen] = useState(false)
    const onAlertClose = () => setAlertIsOpen(false)
    const cancelAlertRef = useRef()
    const [ alert, setAlert ] = useState({title: '',message: ''});

    useEffect(() => {
        if(error) {
            setAlert({title: 'Error', message: error})
            setAlertIsOpen(true);
            setError(null);
        }
    },[error,setError]);

    const handleChange = (e) => {
        const newUser = {
            ...tempUser,    
            [e.target.name]: e.target.value
        };
        setTempUser(newUser);
    }

    const handleRegister = async () => {
        await registerUser(tempUser);
    }

    return (
    <Flex direction="column" height="100vh" alignItems="center" justifyContent="center" background="gray.200">
        <Flex direction="column" background="gray.100" p={12} rounded={6}>
            <Heading mb={6}>Registro</Heading>
            <Input placeholder="Nombre Completo" name="name" onChange={handleChange} variant="flushed" mb={3} colorScheme="black" style={{ textTransform: "uppercase" }}/>
            <Input placeholder="Num. Empleado" name="numEmpl" onChange={handleChange} variant="flushed" mb={3} type="number" colorScheme="black"/>
            <Input placeholder="Contraseña" name="password" onChange={handleChange} variant="flushed" mb={6} type="password"/>
            <Link to="/register"><Button colorScheme="blue" my={2} onClick={handleRegister}>Dale 🤘</Button></Link>
            <ErrorAlert id="errorAlert" isOpen={isAlertOpen} onClose={onAlertClose} cancelRef={cancelAlertRef} title={alert.title} message={alert.message}/>
        </Flex>
    </Flex>
    );
}

export default Register;