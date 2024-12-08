import React from 'react'
import styles from './UserPhotoPost.module.css'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { PHOTO_POST } from '../../api';
import { useNavigate } from 'react-router-dom';
import Head from "../Helper/Head"

const UserPhoto = () => {
  const nome = useForm();
  const idade = useForm('number');
  const peso = useForm('number');
  const [img, setImg] = React.useState({})
  const {data, error, loading, request } = useFetch()
  const navigate = useNavigate();

  React.useEffect(()=>{
    if(data) navigate('/conta')
  },[data, navigate])

  function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('idade', idade.value);
    formData.append('peso', peso.value);

    const token = window.localStorage.getItem('token');
    const {url, options} = PHOTO_POST(formData,token);
    request(url, options);
  }

  function handleChange({target}){
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    })
  }


  return (
    <div className={`${styles.photoPost} animeLeft`}>
    <Head title="Postar Foto" description="Uma rede social para cães e gatos fofos."/>
      <form onSubmit={handleSubmit}>
          <Input label="Nome" type="text" name="nome" {...nome} />
          <Input label="Idade" type="number" name="idade" {...idade} />
          <Input label="Peso" type="number" name="peso" {...peso}/>
          <input type='file' className={styles.file} onChange={handleChange}/>
          {loading ? 
          <Button disabled>Enviando...</Button>
          :
          <Button>Enviar</Button>
          }
          {error && <Error error={error}/>}
      </form>

      <div>
        {img.preview && 
            <div className={styles.preview} style={{backgroundImage: `url('${img.preview}')`}}></div>
        }
      </div>
    </div>
  )
}

export default UserPhoto