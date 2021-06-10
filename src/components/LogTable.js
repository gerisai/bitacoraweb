import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"

const LogTable = () => {
    return (
<Table variant="simple" colorScheme="telegram"> 
<Thead>
    <Tr>
    <Th>OS</Th>
    <Th>IDC</Th>
    <Th>Nombre</Th>
    <Th>Fecha</Th>
    </Tr>
</Thead>
<Tbody>
    <Tr>
    <Td>inches</Td>
    <Td>millimetres (mm)</Td>
    <Td isNumeric>25.4</Td>
    </Tr>
    <Tr>
    <Td>feet</Td>
    <Td>centimetres (cm)</Td>
    <Td isNumeric>30.48</Td>
    </Tr>
    <Tr>
    <Td>yards</Td>
    <Td>metres (m)</Td>
    <Td isNumeric>0.91444</Td>
    </Tr>
</Tbody>
</Table>
    );
}

export default LogTable;