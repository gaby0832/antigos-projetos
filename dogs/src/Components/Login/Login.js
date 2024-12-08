import React from 'react'
import { Route, Routes, Navigate} from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'
import { useContext } from 'react'
import { UserContext } from '../../UserContext'
import styles from './Login.module.css'
import NotFound from '../Helper/NotFound'

const Login = () => {

  const { login } = useContext(UserContext);



  if (login === true) return <Navigate to="/conta"/>
  return (
    <section className={styles.loginForm}>
        <div className={styles.backgroundImg}></div>
        <div className={styles.forms}>
          <div className={styles.centered}>
          <Routes>
              <Route path="/" element={<LoginForm/>} />
              <Route path="criar" element={<LoginCreate/>} />
              <Route path="perdeu" element={<LoginPasswordLost/>} />
              <Route path="renovar" element={<LoginPasswordReset/>} />
              <Route path='*' element={<NotFound/>}/>
          </Routes>
          </div>
        </div>
    </section>
  )
}

export default Login