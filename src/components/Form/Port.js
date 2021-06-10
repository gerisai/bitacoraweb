import { 
    InputGroup,
    InputLeftAddon,  
    Input, 
    Select,
    Wrap,
    WrapItem
} from '@chakra-ui/react'; 

const Port = ({ id, numb, form, setForm}) => {
    const handleChange = (e) => {
        const newForm = {...form};
        newForm.splitters[id - 1].ports[e.target.name] = e.target.value;
        setForm(newForm);
    }
    
    return (
        <Wrap justify="center">
            <WrapItem>
                <InputGroup>
                    <InputLeftAddon children={numb} />
                    <Input variant="filled" placeholder="Puerto" maxW={300} name={`port${numb}`} onChange={handleChange} value={form.splitters[id - 1].ports[`port${numb}`]}/>
                </InputGroup>
            </WrapItem>
            <WrapItem>
                <Select maxW={300} variant="filled" placeholder="Estado" name={`status${numb}`} onChange={handleChange} value={form.splitters[id - 1].ports[`status${numb}`]}>
                    <option value="Libre">Libre</option>
                    <option value="Ocupado">Ocupado</option>
                    <option value="Depurado">Depurado</option>
                    <option value="Asegurado">Asegurado</option>
                    <option value="Fusionado">Fusionado</option>
                    <option value="Empalmado">Empalmado</option>
                    <option value="SinPigtail">Sin Pigtail</option>
                    <option value="Danado">Dañado</option>
                    <option value="Atenuado">Atenuado</option>
                </Select>
            </WrapItem>
        </Wrap>
    )
}

export default Port;