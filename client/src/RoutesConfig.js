import React from 'react';
import Home from './components/Home';
import Activity from './components/Activity';
import ActivityList from './components/ActivityList';
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