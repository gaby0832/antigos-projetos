import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'

const UserAccount = () => {

  const [title, setTitle] = React.useState(null)
  const location = useLocation();
  React.useEffect(()=>{
    const {pathname} = location;
    switch(pathname){
    case '/conta/postar':
    setTitle('Poste Sua Foto');
    break;
    case '/conta/estatisticas':
    setTitle('Estatistícas');
    break;
    default:
    setTitle('Minha conta')
  }

  },[location])


  return (
    <header className={styles.header}>
        {title && <h1 className='title'>{title}</h1>}
        <UserHeaderNav/>
    </header>
  )
}

export default UserAccount