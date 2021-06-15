import { useState, useRef, useEffect, useContext } from 'react';
import { Accordion, Button, Stack } from '@chakra-ui/react';
import { FcDocument, FcCheckmark, FcMakeDecision, FcCancel } from 'react-icons/fc';
import FormSection from './Form/FormSection';
import GeneralForm from './Form/GeneralForm';
import LocationForm from './Form/LocationForm';
import SplitterForm from './Form/SplitterForm';
import CommentForm from './Form/CommentForm';
import { SuccessAlert, ErrorAlert } from './Alerts/Alerts';
import ScriptAlert from './Alerts/ScriptAlert'; 
import formFields from './Form/Loads/FormFields';
import useLog from '../hooks/useLog';
import { FormContext } from '../hooks/FormContext';

const LogForm = () => {
    //Form state
    const { form, setForm } = useContext(FormContext);
    const { editing, setEditing } = useContext(FormContext);
    //Success Alert
    const [isSuccessOpen, setSuccessIsOpen] = useState(false);
    const onSuccessClose = () => setSuccessIsOpen(false);
    const cancelSuccessRef = useRef();
    const { createLog, editLog, error, setError, success, setSuccess } = useLog();
    const [ successAlert, setSuccessAlert ] = useState({title: '',message: ''});
    //Script Alert
    const [isScriptOpen, setScriptIsOpen] = useState(false);
    const onScriptClose = () => setScriptIsOpen(false);
    const cancelScriptRef = useRef();
    //Error Alert
    const [isErrorOpen, setErrorIsOpen] = useState(false);
    const onErrorClose = () => setErrorIsOpen(false);
    const cancelErrorRef = useRef();
    const [ errorAlert, setErrorAlert ] = useState({title: '',message: ''});
    //Support
    const [ support, setSupport ] = useState(false);

    useEffect(() => {
        if(error) {
            setErrorAlert({ title: error.title, message: error.message });
            setErrorIsOpen(true);
            setError(null);
        } 
        if (success) {
            setSuccessAlert({ title: success.title, message: success.message })
            setSuccessIsOpen(true);
            setSuccess(null); 
        }
    },[error,setError,success,setSuccess]);

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
            <Button leftIcon={<FcCheckmark/>} colorScheme="teal" variant="outline" onClick={handleSave}>Guardar</Button>
            <Button leftIcon={<FcMakeDecision/>} colorScheme="yellow" variant="outline" onClick={handleClean}>Limpiar</Button>
            { editing.status ?
                <Button leftIcon={<FcCancel/>} colorScheme="red" variant="outline" onClick={handleCancel}>Cancelar Edición</Button>
                : ""
            }
        </Stack>
        <SuccessAlert isOpen={isSuccessOpen} onClose={onSuccessClose} cancelRef={cancelSuccessRef} title={successAlert.title} message={successAlert.message}/>
        <ScriptAlert isOpen={isScriptOpen} onClose={onScriptClose} cancelRef={cancelScriptRef} form={form}/>
        <ErrorAlert isOpen={isErrorOpen} onClose={onErrorClose} cancelRef={cancelErrorRef} title={errorAlert.title} message={errorAlert.message}/>
        </>
    );
}

export default LogForm;