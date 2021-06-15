import { useContext } from 'react';
import { Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react"
import { UserContext } from '../hooks/UserContext';
import LogRecord from './LogRecord';

const LogTable = () => {
    // User context
    const { user } = useContext(UserContext);

    return (
<Table variant="simple" colorScheme="telegram"> 
<Thead>
    <Tr>
    <Th>Servicio</Th>
    <Th>ID</Th>
    <Th>Fecha</Th>
    <Th>Hora</Th>
    <Th>Tipo</Th>
    <Th>Num. Empl.</Th>
    <Th>IDC</Th>
    <Th>Editar</Th>
    <Th>Borrar</Th>
    </Tr>
</Thead>
<Tbody>
    {
        user.logs.map((log,i) => <LogRecord key={i} idx={i} _id={log._id}
                                service={log.service} id={log.id} date={log.date} 
                                type={log.type} numEmpl={log.numEmpl} idc={log.idc}/>
        )
    }
</Tbody>
</Table>
    );
}

export default LogTable;