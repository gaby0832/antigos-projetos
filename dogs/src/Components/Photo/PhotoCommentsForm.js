import React from 'react'
import { ReactComponent as Enviar } from '../../Assets/enviar.svg'
import Error from '../Helper/Error';
import useFetch from '../../Hooks/useFetch'
import styles from './PhotoCommentsForm.module.css'
import { COMMENT_POST } from '../../api'

const PhotoCommentsForm = ({single ,id, setComments}) => {

  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch()

  async function hundlerCommentSubmit(event){
    event.preventDefault()
    const token = window.localStorage.getItem('token');
    const {url, options} = COMMENT_POST(id, {comment},token);
    const {response, json} = await request(url, options);
    if(response.ok) {
      setComments((comments)=> [...comments, json]);
    }
  }

  return (
    <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={hundlerCommentSubmit}>
      <textarea 
      id="comment" 
      name="comment" 
      className={styles.textarea}
      placeholder='comente...' 
      value={comment}
      onChange={({target}) => setComment(target.value)}>
      </textarea>
      <button className={styles.button}>
        <Enviar/>
      </button>
      {error && <Error error={error}/>}
    </form>
  )
}

export default PhotoCommentsForm