import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { PASSWORD_RESET } from '../../api';
import {useNavigate} from 'react-router-dom'
import Head from '../Helper/Head'
      <Head title="Esqueceu a senha?" description="Uma rede social para cães e gatos fofos."/>

const LoginPasswordReset = () => {
  const [key, setKey] = React.useState('');
  const [login, setLogin] = React.useState('');
  const password = useForm('password');
  const {loading, error, request} = useFetch()
  const navigate = useNavigate();

 
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key')
    const login = params.get('login')
    if(key) setKey(key);
    if(login) setLogin(login);
  },[])

  async function hundlerSubmit(e){
    e.preventDefault();
    if(password.validate()){
      const {url, options} = PASSWORD_RESET({
        login: login,
        key: key,
        password: password.value,
      })
      const {response} = await request(url,options);
      if(response.ok) navigate('/login')
    }
  }
 
  return (
    <div>
      <Head title="Resetar a senha" description="Uma rede social para cães e gatos fofos."/>
       <h1 className="title">Resete a Senha</h1>
      <form onSubmit={hundlerSubmit}>
        <Input label="Nova Senha" type="password" name="password" {...password}/>
        {error && <Error error={error}/>}
        {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar Senha</Button>}   
      </form>
    </div>
  )
}

export default LoginPasswordReset