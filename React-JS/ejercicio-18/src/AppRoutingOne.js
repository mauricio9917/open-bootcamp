import { useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import HomePage from './pages/home/homePage';
import Statepage from './pages/home/StatePage';

import Notfoundpage from './pages/404/notFoundPage';
import Aboutpage from './pages/about-faqs/AboutPage';
import Profilepage from './pages/profile/ProfilePage';
import Taskspage from './pages/tasks/tasksPage';
import TaskDetailPage from './pages/tasks/taskDetailPage';
import Loginpage from './pages/auth/loginPage';

function AppRoutingOne() {

  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My fist Task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second Task'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged?', logged)
  }, [])

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>|| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQs |</Link>
          <Link to='/task/1'>| Task 1 |</Link>
          <Link to='/task/2'>| Task 2 |</Link>
          <Link to='/any404'>| Not Existing Route |</Link>
          <Link to='/login'>| Login ||</Link>
        </aside>

        <main>
          <Routes> 
            <Route path='/' element={ <HomePage /> } />
            <Route path='/online-state' element={ <Statepage /> } />
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
            }
            />
            <Route path='/about' element={ <Aboutpage /> } />
            <Route path='/faqs' element={ <Aboutpage /> } />
            <Route path='/profile' element={ <Profilepage /> }>
              {
                logged ? 
                <Profilepage />
                :
                () => {
                  alert('You must be logged in. Redirecting to login...')
                  return (<Navigate to='/login'/>)
                }
              }
            </Route>
            <Route path='/tasks' element={ <Taskspage /> } />
            <Route 
              exact path='/task/:id'
              render = {
                ({match}) => {(<TaskDetailPage task={taskList[match.params.id-1]} />)}
              }
            />
            {/* 404 - Page No Found */}
            <Route path='/any404' element={ <Notfoundpage /> } />
          </Routes>
        </main>

      </div>

    </Router>
  );
}

export default AppRoutingOne;
