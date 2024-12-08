import React from 'react';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css'
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import Head from '../Helper/Head'

const LoginForm = () => {


  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);



  async function handleClick(event){
    event.preventDefault();
    if(username.validate() && password.validate()){
      userLogin(username.value,password.value);
    }
  }


  return (
    <section className='animeLeft'>
        <Head title="Login" description="Uma rede social para cães e gatos fofos."/>
        <div className={styles.backgroundImg}></div>
        <div className={styles.form}>
          <h1 className='title'>Login</h1>
            <form onSubmit={handleClick}>
              <Input label="Usuário" type="text" name="username" {...username}/>
              <Input label="Senha" type="password" name="password" {...password}/>
              
              {loading ? 
                <Button disabled>Carregando...</Button>
              :
                <Button>Entrar</Button>
              }
              
              <Error error={error}/>
            </form>
            <Link to="/login/perdeu" className={styles.perdeu}>Perdeu a senha?</Link>
            <div className={styles.cadastro}>
              <h1 className={styles.subtitle}>Cadastro</h1>
              <p>Ainda não tem conta? faça cadastro no site</p>
              <Link to="/login/criar" className={stylesBtn.button}>Cadastro</Link>
            </div>
        </div>   
    </section>
  )
}

export default LoginForm