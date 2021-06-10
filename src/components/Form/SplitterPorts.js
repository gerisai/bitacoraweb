import { Heading, Switch, Stack } from '@chakra-ui/react';
import Port from './Port';

const createArray = (length) => [...Array(length)];

const SplitterPorts = ({ id, form, handleChange, handleSwitch, sixteen, dummy }) => {
    return (
        <>
        <Heading as="h5" size="sm" mt={2} mb={1}>Puertos</Heading>
        <Stack direction="row" justify="center">
            <p>1:18</p>
            <Switch colorScheme="teal" size="md" name={`ports${id}`} onChange={handleSwitch} isChecked={sixteen}/>
            <p>1:16</p>
        </Stack>
        <Stack key={dummy}>
           { 
                createArray(sixteen ? 16 : 8).map((p,i) => <Port key={i} numb={i+1} id={id} handleChange={handleChange} form={form} />)
            } 
        </Stack>
        </>
    );
}

export default SplitterPorts;