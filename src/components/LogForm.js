import { useState, useRef, useEffect, useContext } from 'react';
import { Accordion, Button, Stack } from '@chakra-ui/react';
import { FcDocument, FcCheckmark, FcMakeDecision, FcCancel } from 'react-icons/fc';
import FormSection from './Form/FormSection';
import GeneralForm from './Form/GeneralForm';
import LocationForm from './Form/LocationForm';
import SplitterForm from './Form/SplitterForm';
import CommentForm from './Form/CommentForm';
import ScriptAlert from './Alerts/ScriptAlert'; 
import formFields from './Form/Loads/FormFields';
import useLog from '../hooks/useLog';
import { FormContext } from '../hooks/FormContext';
import { AlertContext } from '../hooks/AlertContext';

const LogForm = () => {
    //Form state
    const { form, setForm, editing, setEditing } = useContext(FormContext);
    // Log state
    const { createLog, editLog, error, setError, success, setSuccess, saveLoading } = useLog();
    //Script Alert
    const [isScriptOpen, setScriptIsOpen] = useState(false);
    const onScriptClose = () => setScriptIsOpen(false);
    const cancelScriptRef = useRef();
    //Alert
    const { setAlertState, setIsOpen } = useContext(AlertContext);
    //Support
    const [ support, setSupport ] = useState(false);

    useEffect(() => {
        if(error) {
            setAlertState({ title: error.title, message: error.message, status: 'error' });
            setIsOpen(true);
            setError(null);
        } 
        if (success) {
            setAlertState({ title: success.title, message: success.message, status: 'success' });
            setIsOpen(true);
            setSuccess(null); 
        }
    },[error,setError,success,setSuccess, setAlertState, setIsOpen]);

    const handleSave = async () => {
        if (editing.status) await editLog(form,editing.id);
        else await createLog(form);
    }
    
    const addSplitter = () => {
        let newForm = {...form};
        newForm.splitters.push({
            f: 0,
            s: 0,
            p: 0,
            bw: "",
            clients: "",
            portNumber: 8,
            ports: {},
            alarms: []
        });
        setForm(newForm);
    }

    const removeSplitter = () => {
        let newForm = {...form};
        newForm.splitters.pop();
        setForm(newForm);
    }

    const handleClean = (e) => {
        setForm(JSON.parse(JSON.stringify(formFields)));
        setSupport(false);
    }

    const handleChange = (e) => { 
        let newForm = {};
        newForm[e.target.name] = e.target.value;
        newForm = {...form,...newForm};
        setForm(newForm);
    } 

    const handleService = (e) => {
        let newForm = {};
        if (e.target.value === "Soporte") {
            setSupport(true);
            newForm['type'] = 'NA';
        }
        else {
            setSupport(false);
            newForm['type'] = form.type === 'NA' ? '' : form.type;
        }
        newForm[e.target.name] = e.target.value;
        newForm = {...form,...newForm};
        setForm(newForm);
    }
    
    const handleCancel = () => {
        handleClean();
        setEditing({status: false, id: null});
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
                form.splitters.map((s,i) => 
                <FormSection title={`Splitter ${i+1}`} key={i}>
                    <SplitterForm form={form} id={i+1} handleChange={handleChange} setForm={setForm}/>
                </FormSection>
                )
            }
            <FormSection title="Comentario">
                <CommentForm form={form} handleChange={handleChange}/>
            </FormSection>
        </Accordion>
        <Stack direction="row" justify="flex-end" my={4}>
            <Button colorScheme="teal" onClick={addSplitter}>+Splitter</Button>
            <Button colorScheme="red" onClick={removeSplitter} isDisabled={form.splitters.length > 1 ? false : true}>-Splitter</Button>
        </Stack>
        <Stack direction="row" justify="center">
            <Button leftIcon={<FcDocument/>} colorScheme="blue" variant="outline" onClick={() => setScriptIsOpen(true)}>Script</Button>
            <Button leftIcon={<FcCheckmark/>} colorScheme="teal" variant="outline" onClick={handleSave} isLoading={saveLoading}>Guardar</Button>
            <Button leftIcon={<FcMakeDecision/>} colorScheme="yellow" variant="outline" onClick={handleClean}>Limpiar</Button>
            { editing.status ?
                <Button leftIcon={<FcCancel/>} colorScheme="red" variant="outline" onClick={handleCancel}>Cancelar Edición</Button>
                : ""
            }
        </Stack>
        <ScriptAlert isOpen={isScriptOpen} onClose={onScriptClose} cancelRef={cancelScriptRef} form={form}/>
        </>
    );
}

export default LogForm;