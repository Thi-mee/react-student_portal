import { Link } from 'react-router-dom';
import dp from '../assets/profilepics.JPG'
import '../css/sidebar.css'

const SideBar = props => {
  
  return (
    <aside className="side__bar">
      <div className="side__bar__image">
        <img src={dp} alt="profile" />
      </div>
      <h3>{props.name}</h3>
      
      <div className="side__bar__links">
        <Link to="/" className="side__bar__link">  DashBoard  </Link>
        <Link to="profile" className="side__bar__link">  Profile  </Link>
        <Link to="account" className="side__bar__link">  Account  </Link>
        <Link to="courses" className="side__bar__link">  Courses  </Link>
        <Link to="concepts" className="side__bar__link">  Concepts  </Link>
        <Link to="community" className="side__bar__link">  Community  </Link>
      </div>
    </aside>
  )
}


export default SideBar