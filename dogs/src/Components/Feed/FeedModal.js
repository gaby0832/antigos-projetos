import React from 'react'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_GET } from '../../api';
import styles from './FeedModal.module.css';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({photo, setModalPhoto}) => {
  const { data, error, loading, request } = useFetch();  
  React.useEffect(()=>{
    const {url, option} = PHOTO_GET(photo.id);
    request(url,option);
  },[photo, request])



  function handlerOutSide(event){
    if(event.target === event.currentTarget) setModalPhoto(null)
  }

  return (
    <div className={styles.modal} onClick={handlerOutSide}>
        {error && <Error error={error}/>}
        {loading && <Loading/>}
        {data && <PhotoContent data={data}/>}
    </div>
  )
}

export default FeedModal