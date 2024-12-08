import React from 'react';

const Input = ({ id, name, label, setValue, ...props }) => {
    return (
      <>
        <label htmlFor={id} className='form-label card-label'>{label}</label>
        <input
          type="text"
          id={id}
          className="form-control"
          name={name}
          onChange={setValue}
          onBlur={setValue}
          {...props}
        />
      </>
    );
  };

export default Input;
