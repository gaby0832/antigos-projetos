import React from 'react';
import '../App.css';

const Confirmlayer = ({ className, transition }) => {
    return (
      <>

        <div className={className}>
            <div className='circle-confirm'>
                <div className={transition ? "icon-true icon" : "icon-false icon"}>
                    {transition ?
                      <i class="fa-solid fa-check"></i>
                      :
                      <i class="fa-solid fa-rotate spinning"></i>
                    }
                </div>

                <div className="transition-title">
                {transition ?
                  <div>
                      <h2>Confirmado</h2>
                      <p>Recaregue a pagina para testar o app novamente</p>
                  </div>    
                      :
                      <h2>Carregando</h2>
                }
                </div>
            </div>
        </div>

      </>
    );
  };

export default Confirmlayer;
