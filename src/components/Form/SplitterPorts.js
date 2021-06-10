import { Heading, Switch, Stack } from '@chakra-ui/react';
import Port from './Port';

const createArray = (length) => [...Array(length)];

const SplitterPorts = ({ id, form, setForm }) => {
    
    const handleSwitch = (e) => {
        const newForm = {...form}; 
        newForm.splitters[id - 1].portNumber = e.target.checked ? 16 : 8; 
        setForm(newForm);
    }

    return (
        <>
        <Heading as="h5" size="sm" mt={2} mb={1}>Puertos</Heading>
        <Stack direction="row" justify="center">
            <p>1:18</p>
            <Switch colorScheme="teal" size="md" name="portNumber" onChange={handleSwitch} isChecked={form.splitters[id - 1].portNumber === 16 ? true : false}/>
            <p>1:16</p>
        </Stack>
        <Stack key={form.splitters[id - 1].portNumber}>
           { 
                createArray(form.splitters[id - 1].portNumber).map((p,i) => <Port key={i} numb={i+1} id={id} form={form} setForm={setForm} />)
            } 
        </Stack>
        </>
    );
}

export default SplitterPorts;