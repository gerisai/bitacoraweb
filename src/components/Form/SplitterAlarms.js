import { Heading, Stack, Button } from '@chakra-ui/react';
import Alarm from './Alarm';


const SplitterAlarms = ({ id, form, setForm }) => {

    const onAdd = () => {
        let newForm = {...form};
        newForm.splitters[id - 1].alarms = [...form.splitters[id - 1].alarms, {alarm: "", status:""}];
        setForm(newForm);
    }
    
    const onRemove = () => {
        let newForm = {...form};
        newForm.splitters[id - 1].alarms.pop();
        setForm(newForm);
    }

    const handleChange = (e,numb) => {
        const newForm = {...form};
        newForm.splitters[id - 1].alarms[numb - 1][e.target.name] = e.target.value;
        setForm(newForm);
    }

    return (
        <>
        <Heading as="h5" size="sm" mt={5} mb={1}>Alarmas</Heading>
        <Button size="sm" colorScheme="teal" mb={2} onClick={onAdd} mx={1}>+</Button>
        <Button size="sm" colorScheme="red" mb={2} onClick={onRemove} mx={1}>-</Button>
        <Stack>
           { 
                form.splitters[id-1].alarms.map((n,i) => <Alarm key={i} numb={i + 1} id={id} handleChange={handleChange}/>)
            } 
        </Stack>
        </>
    );
}

export default SplitterAlarms;