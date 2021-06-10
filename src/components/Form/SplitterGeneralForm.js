import { 
    Input,
    InputGroup,
    InputLeftAddon,  
    WrapItem,
    Wrap,   
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react';

const SplitterGeneralForm = ({ id, form, setForm }) => {
    const handleChange = (e) => {
        let newForm = {...form}
        newForm.splitters[id - 1] = {...form.splitters[id-1]};
        newForm.splitters[id - 1][e.target.name] = e.target.value;
        setForm(newForm);        
    }

    return (
        <Wrap spacing="30px" justify="center">
        <WrapItem>
            <InputGroup>
                <InputLeftAddon children="F" />
                <NumberInput defaultValue={0} min={0} max={1} maxW={70} value={form.splitters[id - 1].f}>
                    <NumberInputField name="f" onChange={handleChange}/>
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </InputGroup>
        </WrapItem>
        <WrapItem>
            <InputGroup>
                <InputLeftAddon children="S" />
                <NumberInput defaultValue={0} min={0} max={18} maxW={70} value={form.splitters[id - 1].s}>
                    <NumberInputField name="s" onChange={handleChange}/>
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </InputGroup>
        </WrapItem>
        <WrapItem>
            <InputGroup>
                <InputLeftAddon children="P" />
                <NumberInput defaultValue={0} min={0} max={16} maxW={70} value={form.splitters[id - 1].p}>
                    <NumberInputField name="p" onChange={handleChange} />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </InputGroup>
        </WrapItem>
        <WrapItem>
            <Input type="number" variant="filled" placeholder="Ancho de Banda" maxW={160} name="bw" onChange={handleChange} value={form.splitters[id - 1].bw}/>
        </WrapItem>
        <WrapItem>
            <Input type="number" variant="filled" placeholder="Clientes" maxW={130} name="clients" onChange={handleChange} value={form.splitters[id - 1].clients}/>
        </WrapItem>
    </Wrap>
    );
}

export default SplitterGeneralForm;