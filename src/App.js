import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Portal from './pages/Portal';
import Profile from './components/Profile';
import Account from './components/Account';
import Courses from './components/Courses';
import Coursereg from './components/CourseRegComponents/Coursereg';
import Concepts from './components/Concepts';
import Community from './components/Community';
import DashBoard from './components/DashboardComponents/DashBoard';
import Academics from './components/AcademicComponents/Academics';
import AcademicProfile from './components/AcademicComponents/AcademicProfile';
import NoMatch from './pages/NoMatch';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' exact element={<Login />} />


        <Route path='/' element={<Portal />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/account' element={<Account />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/concepts' element={<Concepts />} />
          <Route path='/community' element={<Community />} />
          <Route path='/courseregistration' element={<Coursereg />} />
          <Route path='/addAcademicYear' element={<Academics />} />
          <Route path='/academicprofile' element={<AcademicProfile />} />
          <Route exact path='/' element={<DashBoard />} />
        </Route>

        <Route path='*' element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
