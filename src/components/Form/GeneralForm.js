import { Input, Select, WrapItem, Wrap } from '@chakra-ui/react';
import Providers from './Loads/Providers';
import Districts from './Loads/Districts';

const GeneralForm = ({ form, handleChange, handleService, support }) => { 

    return (
    <Wrap spacing="30px" justify="center">
    <WrapItem>
        <Select placeholder="Servicio" variant="filled" name="service" onChange={handleService} value={form.service}>
            <option value="OS">OS</option>
            <option value="ID">ID</option>
            <option value="OT">OT</option>
            <option value="CU">CU</option>
            <option value="Soporte">Soporte</option>
        </Select>
    </WrapItem>
    <WrapItem>
        <Input variant="filled" placeholder="Identificador" name="id" maxW={130} onChange={handleChange} value={form.id}/> 
    </WrapItem>
    <WrapItem>    
        <Select id="type" placeholder="Tipo" variant="filled" name="type" onChange={handleChange} value={form.type} isDisabled={support}>
            <option value="Organica">Orgánica</option>
            <option value="Masiva">Masiva</option>
            <option value="ZTE">ZTE</option>
            <option value="NA">N/A</option>
        </Select>
    </WrapItem>
    <WrapItem>
        <Input variant="filled" placeholder="Num Empleado" maxW={170} name="numEmpl" onChange={handleChange} value={form.numEmpl}/>
    </WrapItem>
    <WrapItem>
        <Input variant="filled" placeholder="Nombre IDC" minW={250} name="idc" onChange={(e) => { e.target.value = e.target.value.toUpperCase(); handleChange(e) }} value={form.idc} style={{textTransform: 'uppercase'}}/>
    </WrapItem>
    <WrapItem>
        <Select placeholder="Proveedor" variant="filled" name="provider" onChange={handleChange} value={form.provider}>
            <Providers/>    
        </Select>
    </WrapItem>
    <WrapItem>
        <Select placeholder="Distrito" variant="filled" name="district" onChange={handleChange} value={form.district}> 
            <Districts/>
        </Select>
    </WrapItem>
    </Wrap>
    );
}

export default GeneralForm;