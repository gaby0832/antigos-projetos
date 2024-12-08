import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { ReactComponent as Feed } from '../../Assets/feed.svg';
import { ReactComponent as Stats } from '../../Assets/estatisticas.svg';
import { ReactComponent as Post } from '../../Assets/adicionar.svg';
import { ReactComponent as Logout } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import './UserHeaderNav.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {

  const mobile = useMedia('(max-width: 40rem)');
  const {userLogout} = React.useContext(UserContext);
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const {pathname} = useLocation();
  React.useEffect(()=>{
    setMobileMenu(false);
  },[pathname])
  
  return (
    <>
    {mobile && <button aria-label='menu' className={`${styles.menuButton} ${mobileMenu && styles.activeMenuButton}`} onClick={ () => setMobileMenu(!mobileMenu)}></button>}
    <nav className={`${mobile ? styles.mobileNav : styles.nav} ${mobileMenu && styles.mobileNavActive}`}>
        <NavLink to="/conta" end><Feed/> {mobile && 'Minhas fotos'}</NavLink>
        <NavLink to="/conta/estatisticas"><Stats/> {mobile && 'Estatistícas'}</NavLink>
        <NavLink to="/conta/postar"><Post/>  {mobile && 'Adicionar Foto'}</NavLink>
        <button onClick={userLogout}><Logout/>  {mobile && 'Sair'}</button>
    </nav>
    </>
  )
}

export default UserHeaderNav