import { Input, Select, WrapItem, Wrap } from '@chakra-ui/react';
import Clusters from './Loads/Clusters';

const LocationForm = ({ form, handleChange }) => {
    return(
    <Wrap spacing="30px" justify="center">
        <WrapItem>
            <Input variant="filled" placeholder="Dirección" minW={500} name="address" onChange={handleChange} value={form.address}/>
        </WrapItem>
        <WrapItem>
            <Input variant="filled" placeholder="Coordenadas" name="coordinates" onChange={handleChange} value={form.coordinates}/>
        </WrapItem>
        <WrapItem>
            <Select placeholder="Cluster" variant="filled" name="cluster" onChange={handleChange} value={form.cluster}>
                <Clusters/>
            </Select>        
        </WrapItem>
        <WrapItem>
            <Input variant="filled" placeholder="OLT" name="olt" onChange={handleChange} value={form.olt} style={{textTransform: 'uppercase'}}/>
        </WrapItem>
    </Wrap>
    );
}

export default LocationForm;