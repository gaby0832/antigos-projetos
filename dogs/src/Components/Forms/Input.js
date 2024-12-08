import React from 'react'
import styles from './Input.module.css';
import { ReactComponent as Esconder } from '../../Assets/olho-esconder.svg'
import { ReactComponent as Mostrar } from '../../Assets/olho-mostrar.svg'
const Input = ({label, type, name, value, onChange, error, onBlur}) => {
  const [show,setShow] = React.useState(false);
  return (
    <div className={styles.wrapper}>
        <label htmlFor={name} className={styles.label}>
            {label}
        </label>
        <div className={styles.gridInput}>
        <input id={name} 
        className={styles.input} 
        type={show ? 'text' : type} 
        name={name} 
        value={value} 
        onChange={onChange}
        onBlur={onBlur}/>
        {type === 'password' ? <p className={styles.show}  onClick={()=>{setShow(!show)}}>{show ? <Esconder/> : <Mostrar/>}</p> : ''}
        </div>
        {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input