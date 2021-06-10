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

const SplitterGeneralForm = ({ id, form, handleChange }) => {

    return (
        <Wrap spacing="30px" justify="center">
        <WrapItem>
            <InputGroup>
                <InputLeftAddon children="F" />
                <NumberInput defaultValue={0} min={0} max={1} maxW={70} value={form[`f${id}`]}>
                    <NumberInputField name={`f${id}`} onChange={handleChange}/>
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
                <NumberInput defaultValue={0} min={0} max={18} maxW={70} value={form[`s${id}`]}>
                    <NumberInputField name={`s${id}`} onChange={handleChange}/>
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
                <NumberInput defaultValue={0} min={0} max={16} maxW={70} value={form[`p${id}`]}>
                    <NumberInputField name={`p${id}`} onChange={handleChange} />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </InputGroup>
        </WrapItem>
        <WrapItem>
            <Input variant="filled" placeholder="Ancho de Banda" maxW={160} name={`bw${id}`} onChange={handleChange} value={form[`bw${id}`]}/>
        </WrapItem>
        <WrapItem>
            <Input variant="filled" placeholder="Clientes" maxW={130} name={`clients${id}`} onChange={handleChange} value={form[`clients${id}`]}/>
        </WrapItem>
    </Wrap>
    );
}

export default SplitterGeneralForm;