import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Portal from './pages/Portal';
import Profile from './components/Profile';
import Account from './components/Account';
import Courses from './components/Courses';
import Concepts from './components/Concepts';
import Community from './components/Community';
import DashBoard from './components/DashBoard';
import Academics from './components/Academics';
import NoMatch from './pages/NoMatch';

import './App.css';

function App() {
  // example
  // let exampleUser = "/thi-mee"

  return (
    <div className='app'>
        <Router>
          <Routes>
            <Route path='/login' exact element={<Login />} />
            
            <Route path='/' element={<Portal />}>
              <Route path='/profile' element={<Profile />} />
              <Route path='/account' element={<Account />} />
              <Route path='/courses' element={<Courses />} />
              <Route path='/concepts' element={<Concepts />} />
              <Route path='/community' element={<Community />} />
              <Route path='/addAcademicYear' element={<Academics />} />
              <Route exact path='/' element={<DashBoard />} />
            </Route>
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
