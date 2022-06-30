import React, {useEffect, useState} from 'react'


import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';

// Import Bootstrap Styling from Node Modules
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


// import page components
import TasksPage from './components/tasks/TasksPage';
import RegisterPage from './components/auth/RegisterPage';
import LoginPage from './components/auth/LoginPage';
import Navbar from './components/common/Navbar';
import RequireAuth from './components/common/RequireAuth';
import Spinner from './components/common/Spinner';

export default function App() {

  const [user, setUser] = useState(null);
  const [isUserSet, setisUserSet] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) =>{
      setUser(user);
      setisUserSet(true);
    });

    return () => unsub(); 
  },[]);

  return (
    <BrowserRouter>
      <Navbar user={user} />
      {
        isUserSet ?
          <Routes>
          <Route path="/" element={
            <RequireAuth user={user}>
              <TasksPage/>
            </RequireAuth>
          } />
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
        :
        <Spinner variant='success' className=''/>
      }
    </BrowserRouter>
  )
}
