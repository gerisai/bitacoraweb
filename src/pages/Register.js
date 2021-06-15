import { useState, useEffect, useRef } from 'react';
import { Flex, Heading, Input, Button, InputGroup, InputRightElement, useToast } from '@chakra-ui/react';
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { ErrorAlert } from '../components/Alerts/Alerts';
import  useAuth from '../hooks/useAuth';

const Register = () => {
    //Toast Error
    const toast = useToast();
    // User form
    const [tempUser, setTempUser] = useState({ numEmpl: '', password: ''});
    const [show, setShow] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
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

    const handleShow = () => setShow(!show);
    const handleShowConfirm = () => setShowConfirm(!showConfirm);

    const handleChange = (e) => {
        const newUser = {
            ...tempUser,    
            [e.target.name]: e.target.value
        };
        setTempUser(newUser);
    }

    const handleRegister = async () => {
        if (tempUser.password !== tempUser.passwordConfirm) return toast({
            title: "Error",
            description: "Las contraseñas no coinciden",
            status: "error",
            duration: 9000,
            isClosable: true,
        });
        await registerUser(tempUser);
    }

    return (
    <Flex direction="column" height="100vh" alignItems="center" justifyContent="center" background="gray.200">
        <Flex direction="column" background="gray.100" p={12} rounded={6}>
            <Heading mb={6}>Registro</Heading>
            <Input placeholder="Nombre Completo" name="name" onChange={handleChange} variant="flushed" mb={3} colorScheme="black" style={{ textTransform: "uppercase" }}/>
            <Input placeholder="Num. Empleado" name="numEmpl" onChange={handleChange} variant="flushed" mb={3} type="number" colorScheme="black"/>
            <InputGroup>
                <Input placeholder="Contraseña" name="password" onChange={handleChange} variant="flushed" mb={6} type={show ? "text" : "password"}/>
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShow}>
                        {show ? <BiHide/>: <BiShow/>}
                    </Button>
                </InputRightElement>
            </InputGroup>
            <InputGroup>
                <Input placeholder="Confirmar contraseña" name="passwordConfirm" onChange={handleChange} variant="flushed" mb={6} type={showConfirm ? "text" : "password"}/>
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowConfirm}>
                        {showConfirm ? <BiHide/>: <BiShow/>}
                    </Button>
                </InputRightElement>
            </InputGroup>
            <Link to="/register"><Button colorScheme="blue" my={2} onClick={handleRegister}>Dale 🤘</Button></Link>
            <ErrorAlert id="errorAlert" isOpen={isAlertOpen} onClose={onAlertClose} cancelRef={cancelAlertRef} title={alert.title} message={alert.message}/>
        </Flex>
    </Flex>
    );
}

export default Register;