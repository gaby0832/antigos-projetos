import React from 'react';
import '../App.css';

const Loadinglayer = ({ className }) => {
    return (
      <>
        <div className={className} >
            <i className="fa-solid fa-circle-notch spinning"></i>
            <h1>Carregando</h1>    
        </div>
      </>
    );
  };

export default Loadinglayer;
