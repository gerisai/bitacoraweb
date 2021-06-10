import { 
    InputGroup,
    InputLeftAddon,  
    Input, 
    Select,
    Wrap,
    WrapItem
} from '@chakra-ui/react'; 

const Alarm = ({ id, numb, handleChange }) => {
    return (
        <Wrap justify="center">
            <WrapItem>
                <InputGroup>
                    <InputLeftAddon children={numb} />
                    <Input variant="filled" placeholder="Alarma" maxW={300} name={`alarm${id}_${numb}`} onChange={handleChange}/>
                </InputGroup>
            </WrapItem>
            <WrapItem>
                <Select maxW={300} variant="filled" placeholder="Estado" name={`alst${id}_${numb}`} onChange={handleChange}>
                    <option value="Alarmada">Alarmada</option>
                    <option value="Apagada">Apagada</option>
                </Select>
            </WrapItem>
        </Wrap>
    )
}

export default Alarm;