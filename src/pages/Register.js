import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik'; 
import { Flex, Heading, FormControl, Input, Button, InputGroup, InputRightElement, useToast, FormErrorMessage } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiShow, BiHide } from "react-icons/bi";
import  useAuth from '../hooks/useAuth';

const Register = () => {
    //Toast
    const toast = useToast();
    // User form
    const [ show, setShow ] = useState(false)
    const [ showConfirm, setShowConfirm ] = useState(false)
    // Auth
    const { registerUser, error, setError } = useAuth();

    useEffect(() => {
        if(error && !toast.isActive('Server-Error')) {
            toast({
                id: 'Server-Error',
                title: "Error",
                description: error,
                status: "error",
                duration: 9000,
                isClosable: true,
            });
            setError(null);
        }
    },[error,setError, toast]);

    const handleShow = () => setShow(!show);
    const handleShowConfirm = () => setShowConfirm(!showConfirm);

    const handleRegister = async (values, actions) => {
        values.name = values.name.toUpperCase();
        if ( (values.password !== values.passwordConfirm) && (!toast.isActive('Not-Matching-Password')) ) return toast({
            id: 'Not-Matching-Password',
            title: "Error",
            description: "Las contraseñas no coinciden",
            status: "error",
            duration: 9000,
            isClosable: true,
        });
        await registerUser({...values});
        actions.setSubmitting(false);
    }

    const validateField = (value) => {
        let error;
        if(!value) error = 'El campo no puede estar vacío';
        else return
        return error;
    }

    return (
    <Flex direction="column" height="100vh" alignItems="center" justifyContent="center" background="gray.200">
        <Flex direction="column" background="gray.100" p={12} rounded={6}>
            <Heading mb={6}>Registro</Heading>
            <Formik initialValues={{name:"", numEmpl: "", password: "", passwordConfirm: ""}} onSubmit={handleRegister}>
                {(props) => ( 
                <Form>
                    <Field name="name" validate={validateField}>
                        {({ field,form }) => (
                        <FormControl isInvalid={form.errors.name && form.touched.name} mb={3}>
                            <Input {...field} id="name" placeholder="Nombre completo" variant="flushed" />
                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </FormControl>
                        )}
                    </Field>
                    <Field name="numEmpl" validate={validateField}>
                        {({ field,form }) => (
                        <FormControl isInvalid={form.errors.numEmpl && form.touched.numEmpl} mb={3}>
                            <Input {...field} id="numEmpl" placeholder="Num. Empleado" variant="flushed" type="number"/>
                            <FormErrorMessage>{form.errors.numEmpl}</FormErrorMessage>
                        </FormControl>
                        )}
                    </Field>
                    <Field name="password" validate={validateField}>
                        {({ field,form }) => (
                        <FormControl isInvalid={form.errors.password && form.touched.password} mb={3}>
                            <InputGroup>
                                <Input {...field} id="password" placeholder="Contraseña" variant="flushed"  type={show ? "text" : "password"}/>
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
                    <Field name="passwordConfirm" validate={validateField} mb={3}> 
                        {({ field,form }) => (
                        <FormControl isInvalid={form.errors.passwordConfirm && form.touched.passwordConfirm}>
                            <InputGroup>
                                <Input {...field} id="passwordConfirm" placeholder="Confirmar contraseña"  variant="flushed" type={showConfirm ? "text" : "password"}/>
                                <InputRightElement width="4.5rem">
                                    <Button h="1.75rem" size="sm" onClick={handleShowConfirm}>
                                        {showConfirm ? <BiHide/>: <BiShow/>}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage>{form.errors.passwordConfirm}</FormErrorMessage>
                        </FormControl>
                        )}
                    </Field>
                <Button colorScheme="blue" mt={3} type="submit" isLoading={props.isSubmitting}>Dale 🤘</Button>
                </Form>
                )}
            </Formik>
            <Link to="/login"><Button colorScheme="blue" mt={6} size="sm" variant="link">¿Ya estás registrado?</Button></Link>
        </Flex>
    </Flex>
    );
}

export default Register;