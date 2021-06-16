import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik'; 
import { Flex, Heading, Input, Button, InputGroup, FormControl, FormErrorMessage, InputRightElement, useToast} from '@chakra-ui/react';
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useHistory } from 'react-router-dom';
import  useAuth from '../hooks/useAuth';

const LogIn = ({ location }) => {
    //Toast
    const toast = useToast();
    // Routing
    const history = useHistory();
    // User Auth
    const { loginUser, error, setError } = useAuth();
    // Form
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (location.state && location.state.from === "Private" && !toast.isActive('Private-Violation')) {
            toast({
                id: 'Private-Violation',
                title: "¡Acceso denegado!",
                description: 'Necesitas iniciar sesión 🥲',
                status: "error",
                duration: 9000,
                isClosable: true,
            });       
            history.replace('/login');
        }
        if(error && !toast.isActive('Wrong-Keys')) {
            toast({
                id: 'Wrong-Keys',
                title: "¡Acceso denegado!",
                description: error,
                status: "error",
                duration: 9000,
                isClosable: true,
            });  
            setError(null);
        }
    },[location,history,error,setError, toast]);

    const handleShow = () => setShow(!show);
    
    const handleLogin = async (values,actions) => {
        await loginUser({...values});
        actions.setSubmitting(false);
    }

    const validateField = (value) => {
        let error;
        if(!value) error = 'El campo no puede estar vacío';
        else return 
        return error;
    }
    
    return (
    <Flex direction="row" height="100vh" alignItems="center" justifyContent="center" background="gray.200">
        <Flex direction="column" background="gray.100" p={12} rounded={6} align="center">
            <Heading mb={6}>Iniciar Sesión</Heading>
            <Formik initialValues={{ numEmpl: "", password: "" }} onSubmit={handleLogin}>
            {(props) => (
                <Form>
                    <Field name="numEmpl" validate={validateField}>
                        { ({ field,form }) => (
                        <FormControl isInvalid={form.errors.numEmpl && form.touched.numEmpl} mb={3}>
                            <Input {...field} id="numEmpl" placeholder="Num. Empleado" variant="flushed"  type="number"/>
                            <FormErrorMessage>{form.errors.numEmpl}</FormErrorMessage>
                        </FormControl>
                        )}   
                    </Field>
                    <Field name="password" validate={validateField}>
                        {({ field,form }) => (
                        <FormControl isInvalid={form.errors.password && form.touched.password} mb={3}>
                            <InputGroup>
                                <Input {...field} placeholder="Contraseña" variant="flushed" name="password" type={show ? "text" : "password"}/>
                                <InputRightElement width="4.5rem">
                                    <Button h="1.75rem" size="sm" onClick={handleShow}>
                                        {show ? <BiHide/>: <BiShow/>}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                        </FormControl>
                        )}
                    </Field>
                    <Button colorScheme="teal" type="submit" size="md" isLoading={props.isSubmitting}>Entrar</Button>
                </Form>
            )}
            </Formik>
            <Link to="/register"><Button colorScheme="blue" mt={6} size="sm" variant="link">¿No tienes cuenta?</Button></Link>
        </Flex>
    </Flex>
    );
}

export default LogIn;