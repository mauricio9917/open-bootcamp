import { useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

// import HomePage from './pages/home/homePage';
// import Statepage from './pages/home/StatePage';

// import Notfoundpage from './pages/404/notFoundPage';
// import Aboutpage from './pages/about-faqs/AboutPage';
// import Profilepage from './pages/profile/ProfilePage';
import Taskspage from './pages/tasks/tasksPage';
// import TaskDetailPage from './pages/tasks/taskDetailPage';
import Loginpage from './pages/auth/loginPage';
import Registerpage from './pages/auth/registerPage';

function AppRoutingTask() {

  let logged = false;

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged?', logged)
  }, [])

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>|| HOME |</Link>
          <Link to='/login'>| Login ||</Link>
          <Link to='/register'>| Register ||</Link>
          <Link to='/tasks'>| Tasks ||</Link>
        </aside>

        <main>
          <Routes> 
            <Route path='/login' element= { <Loginpage /> } action={
              logged ? 
                () => {
                  alert('You are logged in. Redirecting to home...')
                  return (<Navigate to='/'/>)
                }
              :
              () => {
                return (<Loginpage></Loginpage>)
              }
            }/>
            <Route path='/register' element= { <Registerpage /> } action={
              logged ? 
                () => {
                  alert('You are logged in. Redirecting to home...')
                  return (<Navigate to='/'/>)
                }
              :
              () => {
                return (<Registerpage></Registerpage>)
              }
            }/>
            <Route path='/tasks' element={
              logged ? 
                () => {
                  alert('You are logged in. Redirecting to tasks...')
                  return (<Navigate to='/tasks'/>)
                }
              :
              () => {
                return (<Loginpage></Loginpage>)
              }
            }
              
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingTask;

