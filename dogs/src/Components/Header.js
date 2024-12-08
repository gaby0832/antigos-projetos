import React from 'react'
import styles from './Header.module.css'
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

const Header = () => {


    
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
        <div className={`${styles.nav} container`}>
            <div className={styles.logo}>
                <Link to="/">
                    <Dogs/>
                </Link>
            </div>
            <nav className={styles.navbar}>
                <ul>
                    {data ?
                    <li>
                        <Link to="/conta" className={styles.login}>{data.nome}</Link>
                    </li> 
                    :
                    <li>
                        <Link to="/login" className={styles.login}>Login / Criar Conta</Link>
                    </li>
                    }
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header