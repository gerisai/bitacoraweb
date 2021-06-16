import { useState, useContext } from 'react';
import { Tabs, TabList, TabPanel, TabPanels, Tab } from "@chakra-ui/react";
import LogTable from '../components/LogTable';
import Stats from '../components/Stats';
import LogForm from '../components/LogForm';
import { FormContext } from '../hooks/FormContext';
import { UserContext } from '../hooks/UserContext';
import useForm from '../hooks/useForm'; 

const CustomTabs = () => {
    const { form, setForm } = useForm();
    const { user } = useContext(UserContext);
    const [ tabIndex, setTabIndex ] = useState(0);
    const [ editing, setEditing ] = useState({status: false, id: null});

    return (
    <FormContext.Provider value={{ form, setForm, setTabIndex, editing, setEditing }}>
        <Tabs  colorScheme="teal" variant="soft-rounded" align="center" size="lg" index={tabIndex}>
            <TabList mb="1em">
                <Tab onClick={() => setTabIndex(0)}>Captura</Tab>
                <Tab onClick={() => setTabIndex(1)}>Registro</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <LogForm/>
                </TabPanel>
                <TabPanel>
                    <Stats total={user.logs.length}/>
                    <LogTable/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </FormContext.Provider>
    );
}

export default CustomTabs;