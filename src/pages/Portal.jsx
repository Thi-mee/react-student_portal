import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import { Outlet} from 'react-router-dom';
import style from '../css/Portal.module.css'

const Portal = () => {
  let profileName = "Ore Adewusi"
  return (
    <>
      <Navbar />
      <div className={style.page__flex}>
        <SideBar name={profileName} />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default Portal