import { Link } from 'react-router-dom';
import dp from '../assets/profilepics.JPG'
import style from '../css/sidebar.module.css'

const SideBar = props => {
  
  return (
    <aside className={style.side__bar}>
      <div className={style.side__bar__image}>
        <img src={dp} alt="profile" />
      </div>
      <h3>{props.name}</h3>
      
      <div className={style.side__bar__links}>
        <Link to="/" className={style.side__bar__link}>  DashBoard  </Link>
        <Link to="profile" className={style.side__bar__link}>  Profile  </Link>
        <Link to="account" className={style.side__bar__link}>  Account  </Link>
        <Link to="courses" className={style.side__bar__link}>  Courses  </Link>
        <Link to="concepts" className={style.side__bar__link}>  Concepts  </Link>
        <Link to="community" className="side__bar__link">  Community  </Link>
      </div>
    </aside>
  )
}


export default SideBar