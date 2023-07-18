import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login'
import Nav from './Nav'
import Register from './Register'
import Home from './Home'
import Routines from './Routines';
import Activities from './Activities';
import CreateRoutines from './CreateRoutines'
import UpdateActivities from './UpdateActivities'
import { getAllRoutines, myData } from '../api'

export function App() {
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});
    const [routines, setGetRoutines] = useState([]);
    const [LoggedIn, setLoggedIn] = useState(false);

 
    const navigate = useNavigate();



    function tokenCheck() {
        if (window.localStorage.getItem('token')) {
            setToken(window.localStorage.getItem('token'));
        console.log(token)
        }
    }

    async function getRoutines() {
        const results = await getAllRoutines();
        if (results.success) {
           setGetRoutines(results.data.routines)
          
        }
    }

    async function getMyData() {
        const results = await myData(token);
        if (results.success) {
            setUser(results.data);
            
        }
    }
   

    useEffect(() => {
        tokenCheck();
    }, [])

    useEffect(() => {
            getRoutines();
        if (token) {
            getMyData();
            setLoggedIn(true);
        }
    }, [token])


    return (

        
        <div>

            <Nav
                setToken={setToken}
                setLoggedIn={setLoggedIn}
                LoggedIn={LoggedIn}
            />

            <Routes>

            
                <Route
                    path='/register'
                    element={<Register setToken={setToken} />}
                />
                <Route
                    path='/login'
                    element={<Login setToken={setToken} navigate={navigate}  />}
                />
               
                <Route
                    path='/routines'
                    element={<Routines routines={routines} />}
                />
            
                <Route
                    path='/activities'
                    element={<Activities />}
                />
                <Route
                    path='/create-routines'
                    element={<CreateRoutines token={token} getAllRoutines={getAllRoutines} />}
                />
                <Route
                    path='/update-activities'
                    element={<UpdateActivities />}
                />
                <Route
                    path='/home'
                    element={<Home />}
                />


            </Routes>
        </div>
    );
}

export default App;
