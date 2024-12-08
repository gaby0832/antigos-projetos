import React from 'react'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_DELETE } from '../../api'
import styles from './PhotoDelete.module.css'

const PhotoDelete = ({id}) => {
    
    const {request, loading} = useFetch()
    async function hundleClick(){
        const confirm = window.confirm("Tem certeza que quer apagar a foto?");
        if(confirm){
            const token = window.localStorage.getItem("token");
            const {url, options} = PHOTO_DELETE(id,token);
            const {response} = await request(url,options);
            if(response.ok) window.location.reload();
        }
    }
    return (
    <div>
        {loading ? <button className={styles.delete} disabled >Deletando</button> 
        :
        <button className={styles.delete} onClick={hundleClick}>Delete</button>}
    </div>
  )
}

export default PhotoDelete