import { Flex, CircularProgress } from '@chakra-ui/react';

const Loading = () => {

    return (
    <Flex direction="column" height="100vh" alignItems="center" justifyContent="center" background="gray.200">
        <CircularProgress isIndeterminate color="teal.400" thickness="15px" size="3em" trackColor="white"/>
    </Flex>
    );
}

export default Loading;