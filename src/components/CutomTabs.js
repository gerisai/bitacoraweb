import { Tabs, TabList, TabPanel, TabPanels, Tab } from "@chakra-ui/react";
import LogTable from '../components/LogTable';
import Stats from '../components/Stats';
import LogForm from '../components/LogForm';

const CustomTabs = () => {
    return (
    <Tabs  colorScheme="teal" variant="soft-rounded" align="center" size="lg">
        <TabList mb="1em">
            <Tab>Captura</Tab>
            <Tab>Registro</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <LogForm/>
            </TabPanel>
            <TabPanel>
                <Stats/>
                <LogTable/>
            </TabPanel>
        </TabPanels>
    </Tabs>
    );
}

export default CustomTabs;