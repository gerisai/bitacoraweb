import { Flex, Button, Heading, Stack, useDisclosure } from "@chakra-ui/react";
import { useContext, useRef } from 'react';
import { FcSupport } from 'react-icons/fc';
import { FcSettings } from "react-icons/fc";
import { UserContext } from '../hooks/UserContext';
import  useAuth from '../hooks/useAuth';
import EditUser from '../pages/EditUser';

const Nav = () => {
    // User context
    const { user } = useContext(UserContext);
    const { logoutUser } = useAuth();

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef();

    return (
        <>
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" background="teal.400"
        mb={8} p={8}>
            <Stack direction="row">
                <FcSupport style={{marginTop: "10px"}}/>
                <Heading as="h1" size="lg" color="white">Bitacora</Heading>
            </Stack>   
            <Heading as="h2" size="md" color="white">{user.name}</Heading>
            <Stack direction="row">
                <Button color="white" variant="solid" ref={btnRef} onClick={onOpen} borderRadius="25px"><FcSettings/></Button>
                <Button colorScheme="red" onClick={logoutUser}>Cerrar Sesión</Button>
            </Stack>
        </Flex>
        <EditUser isOpen={isOpen} onOpen={onOpen} btnRef={btnRef} onClose={onClose}/>
        </>
    );
}

export default Nav;