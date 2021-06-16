import { useState } from 'react';
import {  Tr, Td, Button} from "@chakra-ui/react"
import { TiDelete } from 'react-icons/ti';
import { FiEdit2 } from 'react-icons/fi';
import useLog from '../hooks/useLog';

const LogRecord = ({ _id, idx, service, id, date, type, numEmpl, idc  }) => {
    const { readLog, deleteLog, deleteLoading } = useLog();
    const [ selected, setSelected ] = useState(false);

    const onDelete = async () => {
        setSelected(true);
        await deleteLog(_id);
    }

    const d = new Date(date);
    return (
        <>
        <Tr>
            <Td>{service}</Td>
            <Td>{id}</Td>
            <Td>{date ? d.toLocaleDateString('en-GB') : ''}</Td>
            <Td>{date ? d.toLocaleTimeString('en-GB') : ''}</Td>
            <Td>{type}</Td>
            <Td>{numEmpl}</Td>
            <Td>{idc}</Td>
            <Td><Button variant="ghost" borderRadius="30px" onClick={() => readLog(idx,_id)}><FiEdit2/></Button></Td>
            <Td><Button variant="ghost" borderRadius="30px" onClick={onDelete} isLoading={deleteLoading && selected}><TiDelete/></Button></Td>
        </Tr>  
        </>
    );
}

export default LogRecord;