import  { useContext } from 'react';
import styles from "./Header.module.css";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.jsx';
import Logout from '../Logout/Logout.jsx';

const ThemeSlider = () => {
  const { theme,toggleTheme } = useContext(ThemeContext);
  
  return (
    <div onClick={() => toggleTheme()} className={styles["slider-container"] + " " + styles[`${theme}`]}>
      <div className={styles["slider-button"]}></div>
   </div>
  );
};

const Header = () => {

const {isAuthenticated,logout} = useContext(AuthContext)
const navigate = useNavigate();

const handleLogin = () => {
  navigate("/login");
}

const handleLogout = () => {
  logout();
  navigate("/login");
}


  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles["recipe-platform"]}>Recipe Platform </div>
        <div className={styles.menu}>
          <ul>
            <li><Link className={styles.link} to={'/'}>Home</Link></li>
            {isAuthenticated && <li><Link className={styles.link} to={'/add-recipe'}>Add Recipe</Link></li> }     
             {isAuthenticated && <li><Link className={styles.link} to={'/profile'}>Profile</Link></li>}      
            
            {/* <li><Link className={styles.link} to={'/login'}>{isAuthenticated ? "Logout" : "Login"}</Link></li>    */}
           <li><a onClick={isAuthenticated ? handleLogout : handleLogin}> {isAuthenticated ? "Logout" : "Login"}</a></li> 
            <li><ThemeSlider/></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
