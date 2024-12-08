import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import styles from './LoginForm.module.css';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { PASSWORD_LOST } from '../../api';
import Head from '../Helper/Head'


const LoginPasswordLost = () => {
  const login = useForm()
  const {data, loading, error, request} = useFetch();

  async function handlerSubtmit(e){
    e.preventDefault();
    if(login.validate()){
      const {url, options} = PASSWORD_LOST({login: login.value, url: window.location.href.replace('perdeu','renovar')})
      const {json} = await request(url,options);
      await console.log(json);
    }
  }

  return (
    <section className={styles.form}>
      <Head title="Esqueceu a senha?" description="Uma rede social para cães e gatos fofos."/>
      <h1 className='title'>Perdeu a Senha?</h1>
      {data ? <p style={{color: 'green'}}>{data}</p> : 
      <form onSubmit={handlerSubtmit}>
        <Input label="Email / Usúario" type="text" name="email" {...login}/>
        {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar Email</Button>}
        {error && <Error error={error}/>}
      </form>}
    </section>
  )
}

export default LoginPasswordLost