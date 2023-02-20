import React from 'react';
import {Home, Register} from './components/Modules';
import {Routes, Route} from 'react-router-dom';


const Finished = () => <h1>Finished</h1>
const Logout = () => <h1>Logout</h1>

const RoutesConfig = () => {
    return( 
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/finished' element={<Finished />}></Route>
                <Route path='/logout' element={<Logout />}></Route>
            </Routes>
    );
}

export default RoutesConfig; 