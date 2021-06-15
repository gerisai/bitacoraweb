import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';

export default function useAuth() {
    let history = useHistory();
    const { user, setUser } = useContext(UserContext);
    const [error, setError] = useState(null);
    //set user in context and push them home
    const setUserContext = async () => {
    return await axios.get(`${process.env.REACT_APP_API_URL}/auth/user`,{ withCredentials: true }).then(res => {
        setUser(res.data.currentUser);
        history.push('/home');
        }).catch((err) => {
            setError(err.response.data);
        });
    }
    //register user
    const registerUser = async (data) => {
        const { name, numEmpl, password } = data;
        return axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, {
            name, numEmpl, password
        }, { withCredentials: true }).then(async () => {
            await setUserContext();
        }).catch((err) => {
            setError(err.response.data);
        });
    };

    //login user 
    const loginUser = async (data) => {
        const { numEmpl, password } = data;
        return axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
            numEmpl,
            password
        }, { withCredentials: true })
        .then(async () => {
            await setUserContext();
        }).catch((err) => {
            setError(err.response.data);
        });
    };

    //edit user 
    const editUser = async (data) => {
        const { password, name } = data;
        const id = user._id;
        return axios.put(`${process.env.REACT_APP_API_URL}/user`, {
            id,
            password,
            name,
        }, { withCredentials: true })
        .then(async () => {
            await setUserContext();
        }).catch((err) => {
            setError(err.response.data);
        });
    }

    //logout user
    const logoutUser = async () => {
        return axios.get(`${process.env.REACT_APP_API_URL}/auth/logout`,{ withCredentials: true })
        .then(() => {
            history.push('/login', {from: "Non-private"});
        }).catch((err) => {
            setError(err.response.data);
        });
    }

    return {
    registerUser,
    loginUser,
    logoutUser,
    editUser,
    error,
    setError
    }
}