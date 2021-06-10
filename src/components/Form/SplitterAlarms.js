import { useState } from 'react';
import { Heading, Stack, Button } from '@chakra-ui/react';
import Alarm from './Alarm';


const SplitterAlarms = ({ id, handleChange, form, setForm }) => {
    const [ alarms, setAlarms] = useState([]);
    const onRemove = () => {
        delete form[`alarm${id}_${alarms.length || 1}`];
        delete form[`alst${id}_${alarms.length || 1}`];
        let newForm = {};
        newForm = {...form};
        setForm(newForm);
        alarms.pop();
        const newAlarms = [...alarms];
        setAlarms(newAlarms);
    }

    return (
        <>
        <Heading as="h5" size="sm" mt={5} mb={1}>Alarmas</Heading>
        <Button size="sm" colorScheme="teal" mb={2} onClick={() => {
            const newAlarms = [<Alarm key={alarms.length + 1} numb={alarms.length + 1} />,...alarms];
            setAlarms(newAlarms);
        }} mx={1}>+</Button>
        <Button size="sm" colorScheme="red" mb={2} onClick={() => onRemove()} mx={1}>-</Button>
        <Stack>
           { 
                alarms.map((n,i) => <Alarm key={i} numb={i + 1} id={id} handleChange={handleChange}/>)
            } 
        </Stack>
        </>
    );
}

export default SplitterAlarms;