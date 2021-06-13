import { Flex, Button, Heading, Stack } from "@chakra-ui/react";
import React, { useContext } from 'react';
import { FcSupport } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { FcSettings } from "react-icons/fc";
import { UserContext } from '../hooks/UserContext';
import  useAuth from '../hooks/useAuth';

const Nav = () => {
    const { user } = useContext(UserContext);
    const { logoutUser } = useAuth();

    return (
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" background="teal.400"
        mb={8} p={8}>
            <Stack direction="row">
                <FcSupport style={{marginTop: "10px"}}/>
                <Heading as="h1" size="lg" color="white">Bitacora</Heading>
            </Stack>   
            <Heading as="h2" size="md" color="white">{user.name}</Heading>
            <Stack direction="row">
                <Link to="/edit/"><Button colorScheme="gray" variant="ghost"><FcSettings/></Button></Link>
                <Button colorScheme="red" onClick={logoutUser}>Cerrar Sesión</Button>
            </Stack>
        </Flex>
    );
}

export default Nav;