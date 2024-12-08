import React from 'react'
import styles from './LoginCreate.module.css'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../api';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';
import Head from '../Helper/Head'

const LoginCreate = () => {

  const username = useForm();
  const email = useForm('email');
  const password = useForm();
  const {request, loading, error} = useFetch();

  const { userLogin } = React.useContext(UserContext);

  async function handlerSubmit(event){
    event.preventDefault();
    const {url, options} = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    });
    const {response} = await request(url,options);
    if (response.ok) {
      userLogin(username.value,password.value)
    }
  }

  return (
    <div className={`${styles.LoginCreate} animeLeft`}>
      <Head title="Criar Conta" description="Uma rede social para cães e gatos fofos."/>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handlerSubmit}>
        <Input label="Usuário" type="text" name="username" {...username}/>
        
        <Input label="E-mail" type="email" name="email" {...email}/>
        
        <Input label="Senha" type="password" name="password" {...password}/>

        {loading ?
        <Button disabled>Carregando...</Button>
        :
        <Button>Cadastrar</Button>
        }
        {error && <Error error={error}/>}
      </form>
    </div>
  )
}

export default LoginCreate