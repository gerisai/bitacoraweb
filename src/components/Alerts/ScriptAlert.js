import { useEffect, useState } from 'react';
import { 
AlertDialog,
AlertDialogBody,
AlertDialogHeader,
AlertDialogContent,
AlertDialogOverlay,
Button,
Stack
} from '@chakra-ui/react';

import Script from '../Form/Loads/Script';
import { FcDocument } from 'react-icons/fc';

const ScriptAlert = ({ isOpen, onClose, cancelRef, form }) => {
    const [scriptState, setScriptState] = useState("");
    const [copyState, setCopyState ] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(scriptState);
        setCopyState(true);
    }

    useEffect(() => {
        setTimeout(() => {
            setCopyState(false);
        }, 5000);
    },[copyState]);

    return (
    <AlertDialog
    isOpen={isOpen}
    leastDestructiveRef={cancelRef}
    onClose={onClose}
    size="xl"
    >
        <AlertDialogOverlay>
            <AlertDialogContent bg="blue.500">
            <AlertDialogHeader fontSize="lg" fontWeight="bold" color="white">
                Script de depuración
            </AlertDialogHeader>

            <AlertDialogBody>
                <Stack direction="row" justify="center" mb={2}>
                    <Button leftIcon={<FcDocument/>} colorScheme="teal" variant="solid" onClick={handleCopy}>{copyState ? 'Copiado 👍' : 'Copiar'}</Button>
                </Stack>
                    <Script form={form} setScriptState={setScriptState}/>
            </AlertDialogBody>
            </AlertDialogContent>
        </AlertDialogOverlay>
    </AlertDialog>
    );
}

export default ScriptAlert;
    
    