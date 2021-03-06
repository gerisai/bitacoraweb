import { Heading } from "@chakra-ui/react"; 

const Stats = ({ total }) => {
    return (
        <Heading as="h4" size="md" mb={2} color="gray.600"> Totales: {total}</Heading>
    );
}

export default Stats;