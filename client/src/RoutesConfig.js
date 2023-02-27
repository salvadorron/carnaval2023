import React from 'react';
import {ActivityList, Home, Activity} from './components/Modules';
import {Routes, Route} from 'react-router-dom';


const RoutesConfig = () => {
    return( 
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/createActivity' element={<Activity />} />
                <Route path='/activityList' element={<ActivityList />} />
            </Routes>
    );
}

export default RoutesConfig; 