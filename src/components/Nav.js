import { Flex, Button, Heading, Stack } from "@chakra-ui/react";
import { FcSupport } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" background="teal.400"
        mb={8} p={8}>
            <Stack direction="row">
                <FcSupport style={{marginTop: "10px"}}/>
                <Heading as="h1" size="lg" color="white">Bitacora</Heading>
            </Stack>   
            <Heading as="h2" size="md" color="white">NOMBRE COMPLETO</Heading>
            <Link to="login"><Button colorScheme="red">Cerrar Sesión</Button></Link>
        </Flex>
    );
}

export default Nav;