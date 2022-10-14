import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Loginpage from './pages/auth/loginPage';
import Dashboardpage from './pages/dashboard/DashBoard';
import Notfoundpage from './pages/404/notFoundPage';


function AppRoutingFinal() {

  // TODO: Change to value from sessionStorage (or something dinamic)
  let loggedIn = true;

  return (
    <Router>
      {/* Route Routes */}
      <Routes>
        {/* Redirections to protect our routes */}
        <Route exact path='/'>
          {
           loggedIn ? 
           (<Navigate from='/' to='/dashboard' />)
           :
           (<Navigate from='/' to='/login' /> )
          }
        </Route>
        {/* Login Route */}
        <Route exact path='/login' element={<Loginpage />} />  
        {/* DashBoard Route */}
        <Route exact path='/dashboard'>
          {
           loggedIn ? 
           (<Dashboardpage />)
           :
           (<Navigate from='/' to='/login' /> )
          }
        </Route>
        <Route element={<Notfoundpage/>}/>
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;
