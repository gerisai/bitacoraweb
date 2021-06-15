import { Flex, Image, Heading } from '@chakra-ui/react';

const NotFound = () => {
    // 
    return (
    <Flex direction="column" height="100vh" alignItems="center" justifyContent="center" background="gray.200">
        <Heading as="h1" size="4xl" mb={3}>Página no encontrada</Heading>    
        <Image src="./Travolta.png" alt="TravoltaConfused"/>
    </Flex>
    );
}

export default NotFound;
