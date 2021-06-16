import { useState, useRef } from 'react';

export default function useAlert() {   
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = useRef();
    const [ alertState, setAlertState ] = useState({title: '',message: '', status: 'blue.400'});

    return {
        isOpen,
        setIsOpen,
        onClose,
        setAlertState,
        cancelRef,
        alertState
    }
}