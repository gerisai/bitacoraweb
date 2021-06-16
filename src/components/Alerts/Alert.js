import { useContext } from 'react';
import { 
Heading,
AlertDialog,
AlertDialogBody,
AlertDialogFooter,
AlertDialogHeader,
AlertDialogContent,
AlertDialogOverlay
} from '@chakra-ui/react';
import { AlertContext } from '../../hooks/AlertContext';

const statusMapping = {
    'error': 'red.400',
    'success': 'green.500'
}

export default function Alert () {
    const { alertState, isOpen, cancelRef, onClose } = useContext(AlertContext);
    
    return (
    <AlertDialog
    isOpen={isOpen}
    leastDestructiveRef={cancelRef}
    onClose={onClose}
    >
        <AlertDialogOverlay>
            <AlertDialogContent bg={statusMapping[alertState.status]}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold" color="white">
                {alertState.title}
            </AlertDialogHeader>

            <AlertDialogBody>
                <Heading as="h4" size="sm" color="white">{alertState.message}</Heading>
            </AlertDialogBody>
                
            <AlertDialogFooter>
            </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialogOverlay>
    </AlertDialog>
    );
}