import styles from './header.module.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return <div >
        <h2 className={`${styles.appHeader}`}>Photos</h2>
        <div className={`${styles.navSection}`}>
            <NavLink to='/' className={({ isActive }) => isActive ? `${styles.navBtn} ${styles.active}` : `${styles.navBtn}`}>Recently Added</NavLink >
            <NavLink to='/favourites' className={({ isActive }) => isActive ? `${styles.navBtn}   ${styles.active}` : `${styles.navBtn}`}>Favourites</NavLink >
        </div>
    </div>
}

export default Header
