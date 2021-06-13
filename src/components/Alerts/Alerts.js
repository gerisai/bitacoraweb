import { 
Heading,
AlertDialog,
AlertDialogBody,
AlertDialogFooter,
AlertDialogHeader,
AlertDialogContent,
AlertDialogOverlay
} from '@chakra-ui/react';

const SuccessAlert = ({ isOpen, onClose, cancelRef, title, message }) => {
    return (
    <AlertDialog
    isOpen={isOpen}
    leastDestructiveRef={cancelRef}
    onClose={onClose}
    >
        <AlertDialogOverlay>
            <AlertDialogContent bg="green.500">
            <AlertDialogHeader fontSize="lg" fontWeight="bold" color="white">
                {title}
            </AlertDialogHeader>

            <AlertDialogBody>
                <Heading as="h4" size="sm" color="white">{message}</Heading>
            </AlertDialogBody>
                
            <AlertDialogFooter>
            </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialogOverlay>
    </AlertDialog>
    );
}

const ErrorAlert = ({ isOpen, onClose, cancelRef, title, message }) => {
    return (
    <AlertDialog
    isOpen={isOpen}
    leastDestructiveRef={cancelRef}
    onClose={onClose}
    >
        <AlertDialogOverlay>
            <AlertDialogContent bg="red.500">
            <AlertDialogHeader fontSize="lg" fontWeight="bold" color="white">
                {title}
            </AlertDialogHeader>

            <AlertDialogBody>
                <Heading as="h4" size="sm" color="white">{message}</Heading>
            </AlertDialogBody>
                
            <AlertDialogFooter>
            </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialogOverlay>
    </AlertDialog>
    );
}

export { SuccessAlert, ErrorAlert };