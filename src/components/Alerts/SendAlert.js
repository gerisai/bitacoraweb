import { 
Heading,
AlertDialog,
AlertDialogBody,
AlertDialogFooter,
AlertDialogHeader,
AlertDialogContent,
AlertDialogOverlay
} from '@chakra-ui/react';

const SendAlert = ({ isOpen, onClose, cancelRef }) => {
    return (
    <AlertDialog
    isOpen={isOpen}
    leastDestructiveRef={cancelRef}
    onClose={onClose}
    >
        <AlertDialogOverlay>
            <AlertDialogContent bg="green.500">
            <AlertDialogHeader fontSize="lg" fontWeight="bold" color="white">
                Guardado
            </AlertDialogHeader>

            <AlertDialogBody>
                <Heading as="h4" size="sm" color="white">¡Tu depuración se guardo con éxito! ✌</Heading>
            </AlertDialogBody>

            <AlertDialogFooter>
            </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialogOverlay>
    </AlertDialog>
    );
}

export default SendAlert;

