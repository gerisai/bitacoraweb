import { useState, useRef } from 'react';
import { Accordion, Button, Stack } from '@chakra-ui/react';
import { FcDocument, FcCheckmark, FcMakeDecision } from 'react-icons/fc';
import FormSection from './FormSection';
import GeneralForm from './Form/GeneralForm';
import LocationForm from './Form/LocationForm';
import SplitterForm from './Form/SplitterForm';
import CommentForm from './Form/CommentForm';
import SendAlert from './Alerts/SendAlert';
import ScriptAlert from './Alerts/ScriptAlert';
import formFields from './Form/Loads/FormFields';

const createArray = (length) => [...Array(length)];

const LogForm = () => {
    const [splitters,setSplitters] = useState(1);
    const [ form, setForm ] = useState(formFields);
    //Send State
    const [isSendOpen, setSendIsOpen] = useState(false)
    const onSendClose = () => setSendIsOpen(false)
    const cancelSendRef = useRef()
    //Script State
    const [isScriptOpen, setScriptIsOpen] = useState(false)
    const onScriptClose = () => setScriptIsOpen(false)
    const cancelScriptRef = useRef()
    //Ports UI
    const [sixteen, setSixteen] = useState(false);
    const [dummy, setDummy] = useState(0);
    //Support State
    const [ support, setSupport ] = useState(false);

    const handleClean = (e) => {
        setForm(formFields);
        setSixteen(false);
        setDummy(Date.now());
        setSplitters(1);
        setSupport(false);
    }

    const handleChange = (e) => { 
        let newForm = {};
        newForm[e.target.name] = e.target.value;
        newForm = {...form,...newForm};
        setForm(newForm);
    }

    const handleSwitch = (e) => {
        e.target.value = e.target.checked ? 16 : 8; 
        e.target.checked ? setSixteen(true) : setSixteen(false); 
        handleChange(e);
    }

    const handleService = (e) => {
        if (e.target.value === "Soporte") setSupport(true);
        else setSupport(false);
        handleChange(e);
    } 

    return(
        <>
        <Accordion defaultIndex={[0]} allowMultiple>
            <FormSection title="General">
                <GeneralForm form={form} handleChange={handleChange} handleService={handleService} support={support}/>
            </FormSection>
            <FormSection title="Ubicación">
                <LocationForm form={form} handleChange={handleChange}/>
            </FormSection>
            {
                createArray(splitters).map((s,i) => 
                <FormSection title={`Splitter ${i+1}`} key={i}>
                    <SplitterForm form={form} id={i+1} handleChange={handleChange} handleSwitch={handleSwitch} sixteen={sixteen} dummy={dummy} setForm={setForm}/>
                </FormSection>
                )
            }
            <FormSection title="Comentario">
                <CommentForm form={form} handleChange={handleChange}/>
            </FormSection>
        </Accordion>
        <Stack direction="row" justify="flex-end" my={4}>
            <Button colorScheme="teal" onClick={() => setSplitters(splitters + 1)}>+Splitter</Button>
            <Button colorScheme="red" onClick={() => setSplitters(splitters - 1 < 1 ? 1 : splitters - 1)}>-Splitter</Button>
        </Stack>
        <Stack direction="row" justify="center">
            <Button leftIcon={<FcDocument/>} colorScheme="blue" variant="outline" onClick={() => setScriptIsOpen(true)}>Script</Button>
            <Button leftIcon={<FcCheckmark/>} colorScheme="teal" variant="outline" onClick={() => setSendIsOpen(true)}>Enviar</Button>
            <Button leftIcon={<FcMakeDecision/>} colorScheme="yellow" variant="outline" onClick={handleClean}>Limpiar</Button>
        </Stack>
        <SendAlert isOpen={isSendOpen} onClose={onSendClose} cancelRef={cancelSendRef}/>
        <ScriptAlert isOpen={isScriptOpen} onClose={onScriptClose} cancelRef={cancelScriptRef} form={form} splitters={splitters}/>
        </>
    );
}   
 export default LogForm;