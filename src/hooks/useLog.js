import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';
import { FormContext } from './FormContext';

export default function useLog() {
    let history = useHistory();
    const { user, setUser } = useContext(UserContext);
    const [ error, setError ] = useState(null);
    const [ success, setSuccess ] = useState(null);
    const [ saveLoading, setSaveLoading ] = useState(false);
    const [ deleteLoading, setDeleteLoading ] = useState(false);
    const { setForm, setTabIndex, setEditing } = useContext(FormContext);
    
    //set user in context and push them home
    const setUserContext = async () => {
    return await axios.get(`${process.env.REACT_APP_API_URL}/auth/user`,{ withCredentials: true }).then(res => {
        setUser(res.data.currentUser);
        history.push('/home');
        }).catch((err) => {
            setError({ title: 'Error', message: err.response.data, status: 'error'});
        });
    }
    
    // prepares form to be sent
    const shapeForm = (data) => {
        const newLog = {...data};
        newLog.date = new Date();
        for (let i = 1; i <  newLog.splitters.length + 1; i++) {
            let oldPorts = newLog.splitters[i - 1].ports;
            newLog.splitters[i - 1].ports = [];
            for (let j = 1; j < newLog.splitters[i - 1].portNumber + 1; j++) {
                newLog.splitters[i - 1].ports.push({
                    port: oldPorts[`port${j}`] || '',
                    status: oldPorts[`status${j}`] || ''
                });
            }
        }
        return newLog;
    }

    //add log
    const createLog = async (data) => {
        setSaveLoading(true);
        const newLog = shapeForm(data);
        return axios.post(`${process.env.REACT_APP_API_URL}/log`,{ log: newLog, numEmpl: user.numEmpl }, { withCredentials: true })
        .then(async () => {
            await setUserContext();
            setSuccess({title: 'Guardado', message: 'Depuración guardada con éxito ✌️', status: 'success'});
            setSaveLoading(false);
        }).catch((err) => {
            setError({title:'Error', message: err.response.data, status: 'error'});
            setSaveLoading(false);
        });
    }

    //read log
    const readLog = (id,_id) => {
        setForm(user.logs[id]);
        setTabIndex(0);
        setEditing({status: true, id: _id });
    }

    //edit log
    const editLog =  async (data, _id) => {
        setSaveLoading(true);
        const newLog = shapeForm(data);
        return axios.put(`${process.env.REACT_APP_API_URL}/log`,{ log: newLog, id: _id, numEmpl: user.numEmpl }, { withCredentials: true })
        .then(async () => {
            await setUserContext();
            setSuccess({title: 'Guardado', message: 'Depuración editada con éxito ✌️', status: 'success'});
            setSaveLoading(false);
        }).catch((err) => {
            setError({title:'Error', message: err.response.data, status: 'error'});
            setSaveLoading(false);
        });
    }

    //delete log
    const deleteLog = async (_id) => {
        setDeleteLoading(true);
        return axios.delete(`${process.env.REACT_APP_API_URL}/log`,{ data: { id: _id, numEmpl: user.numEmpl }}, { withCredentials: true })
        .then(async () => {
            await setUserContext();
            setDeleteLoading(false);
        }).catch((err) => {
            setError({title:'Error', message: err.response.data, status: 'error'});
            setDeleteLoading(false);
        });
    }

    return {
    createLog,
    readLog,
    editLog,
    deleteLog,
    error,
    setError,
    success,
    setSuccess,
    saveLoading,
    deleteLoading
    }
}