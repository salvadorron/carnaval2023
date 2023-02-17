import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Content from './Content';


const Start = () => <h1>Home</h1>
const Register = () => <h1>Register</h1>

const MyRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Start />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    );
}

export default MyRoutes;