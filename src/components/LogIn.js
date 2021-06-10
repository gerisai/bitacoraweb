import { Flex, Heading, Input, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const callAPI = () => {
        fetch("http://localhost:9000/test")
        .then(res => res.text())
        .then(res => console.log(res))
    }
    
    return (
    <Flex height="100vh" alignItems="center" justifyContent="center" background="gray.200">
        <Flex direction="column" background="gray.100" p={12} rounded={6}>
            <Heading mb={6}>Iniciar Sesión</Heading>
            <Input placeholder="Num. Empleado" variant="flushed" mb={3} type="number" colorScheme="black"/>
            <Input placeholder="Contraseña" variant="flushed" mb={6} type="password"/>
            <Link to="/home"><Button colorScheme="teal" onClick={callAPI}>Entrar</Button></Link>
        </Flex>
    </Flex>
    );
}

export default LogIn;