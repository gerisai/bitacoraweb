import { useState, useContext} from 'react';
import {  
    Input, 
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';
import { BiShow, BiHide } from "react-icons/bi";
import { UserContext } from '../hooks/UserContext';
import  useAuth from '../hooks/useAuth';

const EditUser = ({ isOpen, onClose, btnRef }) => {
    // User form
    const [tempUser, setTempUser] = useState({ numEmpl: '', password: ''});
    const [show, setShow] = useState(false)
    // User load
    const { user } = useContext(UserContext);
    const { editUser } = useAuth();

    const handleShow = () => setShow(!show);

    const handleChange = (e) => {
        const newUser = {
            ...tempUser,    
            [e.target.name]: e.target.value
        };
        setTempUser(newUser);
    }

    const handleEdit = async () => {
        await editUser(tempUser);
        onClose();
    }

    return (
    <Drawer
    isOpen={isOpen}
    placement="top"
    onClose={onClose}
    finalFocusRef={btnRef}
    >
    <DrawerOverlay />
    <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Editar Usuario ({user.numEmpl})</DrawerHeader>

        <DrawerBody>
        <Input placeholder={user.name || ""}  name="name" onChange={handleChange} variant="flushed" mb={3} colorScheme="black" style={{ textTransform: "uppercase" }}/>
        <InputGroup>
            <Input placeholder="Nueva contraseña" name="password" onChange={handleChange} variant="flushed" mb={6} type={show ? "text" : "password"}/>
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShow}>
                    {show ? <BiHide/>: <BiShow/>}
                </Button>
            </InputRightElement>
        </InputGroup>
        </DrawerBody>

        <DrawerFooter>
        <Button variant="outline" mr={3} onClick={onClose}>
            Cancelar
        </Button>
        <Button colorScheme="teal" onClick={handleEdit}>Editar</Button>
        </DrawerFooter>
    </DrawerContent>
    </Drawer>
    );
}

export default EditUser;