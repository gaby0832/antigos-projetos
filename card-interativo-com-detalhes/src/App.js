import React from 'react';
import './App.css';
import Input from './Form/Input';
import Loadinglayer from './Layers/Loadinglayer';
import Confirmlayer from './Layers/Confirmlayer';


const App = () => {



  
  

  //numero cartão
  const [cardNumber, setCardNumber] = React.useState('');
  const [cardFormatter, setCardFormatter] = React.useState('0000000000000000');
  const [cardHolder, setCardHolder] = React.useState('');
  const [cardWeek, setCardWeek] = React.useState('');
  const [cardYear, setCardYear] = React.useState('');
  const [cardCvc, setCardCVC] = React.useState('');
  const [errorHolder, setErrorHolder] = React.useState("");
  const [errorCard, setErrorCard] = React.useState("");
  const [errorWeek, setErrorWeek] = React.useState("");
  const [errorCVC, setErrorCVC] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [modal, setModal] = React.useState(true);
  const [confirm, setConfirm] = React.useState(false);
  const [transition, setTrasintion] = React.useState(false);
  

  
  React.useEffect(()=>{
    setLoading(true);
    setModal(true);
  },[])
  
  React.useEffect(()=>{
    if(!modal){
      document.querySelector('body').style = "overflow-y:auto;";
    }else{
      document.querySelector('body').style = "overflow-y:hidden;";  
    }
  },[modal])


  
  React.useEffect(()=>{
    let valido = cardNumber.replace(/(\w{4})(?=\w)/g, '$1 ');
    setCardFormatter(valido);
  },[cardNumber])

  React.useEffect(() => {
    if(confirm){
      const timer = setTimeout(() => {
        setTrasintion(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [confirm]);



  const validateCardHolder = (value) =>{
    setCardHolder(value);
    if(cardHolder.length === 0){
      setErrorHolder("");
    }else if(cardHolder.length > 0){
      setErrorHolder("");
    }

  }



    

  const validateCreditCard = (value) => {

    
    let upper = value.toUpperCase();
    let valido = upper.replace(/(\w{4})(?=\w)/g, '$1 ');
    if(valido.length > 19){
      setErrorCard("Coloque um numero de cartão de credito valido")
      setCardNumber(valido);
    }else if(valido.length === 19){
      setErrorCard("")
      setCardNumber(valido);
    }else{
      setErrorCard("Coloque um numero de cartão de credito valido")
      setCardNumber(valido);
    }

    if(value.length === 0){
      setErrorCard('')
    }else{
      let separate = value.split(" ");
      separate.forEach((value)=>{
        if (!/^\d+$/.test(value)) {
          setErrorCard('Numero de cartão de credito não pode conter letras')
        }
      })
    }  


  }


  
  const validateCreditCardWeek = (value) => {

    
    let upper = value.toUpperCase();
    if(upper.length > 2){
      setErrorWeek("O mês ter no maximo 2 caracteres")
      setCardWeek(upper);
    }else if(upper.length === 2){
      setErrorWeek("")
      setCardWeek(upper);
    }else{
      setErrorWeek("O mês ter no minimo 2 caracteres")
      setCardWeek(upper);
    }

    if(value.length === 0){
      setErrorWeek("")
    }else{
        if (!/^\d+$/.test(value)) {
          setErrorWeek("O mês não pode ter letras")
        }else if(Number(value) > 12){
          setErrorWeek("Só temos 12 meses no ano");
        }
    }  


  }


  const validateCreditCardYear = (value) => {

    let upper = value.toUpperCase();
    if(upper.length > 2){
      setErrorWeek("O Ano deve ter no maximo 2 caracteres")
      setCardYear(upper);
    }else if(upper.length === 2){
      setErrorWeek("");
      setCardYear(upper);
    }else{
      setErrorWeek("O Ano deve ter no minimo 2 caracteres")
      setCardYear(upper);
    }

    if(value.length === 0){
      setErrorWeek("");
    }else{
        if (!/^\d+$/.test(value)) {
          setErrorWeek("O Ano não pode tem letras")
        }else if(Number(value) <= 23){
          setErrorWeek("Insira um ano valido");
        }else{
          setErrorWeek("")  
        }
    }  


  }


  
  const validateCreditCardCVC = (value) => {

    let upper = value.toUpperCase();
    if(upper.length > 3){
      setErrorCVC("CVC deve ter no minimo 3 caracteres")
      setCardCVC(upper);
    }else if(upper.length === 3){
      setErrorCVC("");
      setCardCVC(upper);
    }else{
      setErrorCVC("CVC deve ter no máximo 3 caracteres")
      setCardCVC(upper);
    }

    if(value.length === 0){
      setErrorCVC("");
    }else{
        if (!/^\d+$/.test(value)) {
          setErrorCVC("CVC não pode ter letras")
        }
    }  


  }

  const validationReal = () =>{
    
    let validationHolder = false;
    let validationCard = false;
    let validationWeek = false;
    let validationYear = false;
    let validationCVC = false;
    
    
    if(cardHolder){
      validationHolder = true;
    }else{
      validationHolder = false;
      setErrorHolder("Coloque seu nome!")
    }

    if(cardNumber){
      if(cardNumber.length === 19){
        if(!/^\d+$/.test(cardNumber)){
          let numero = cardNumber.split(" ");
          let ini1 = false;
          let ini2 = false;
          let ini3 = false;
          let ini4 = false;
          if(!/^\d+$/.test(numero[0])){
            ini1 = false;
          }else{
            ini1 = true;
          }
          
          if(!/^\d+$/.test(numero[1])){
            ini2 = false;
          }else{
            ini2 = true;
          }
          
          if(!/^\d+$/.test(numero[2])){
            ini3 = false;
          }else{
            ini3 = true;
          }
          
          if(!/^\d+$/.test(numero[3])){
            ini4 = false;
          }else{
            ini4 = true;
          }


          if(ini1 && ini2 && ini3 && ini4){
            validationCard = true;
          }else{
            validationCard = false;
          }
        }else{
          validationCard = true;
        }
      }else{
        setErrorCard("Coloque um numero de cartão de credito valido")
        validationCard = false;
      } 
    }else{
      validationCard = false;
      setErrorCard("Coloque um numero de cartão de credito valido")
    }

    if(cardWeek){
      if(cardWeek.length === 2){
        if(!/^\d+$/.test(cardWeek)){
          setErrorWeek("O mês não pode ter letras")
          validationWeek = false;
        }else{
          if(Number(cardWeek) <= 12){
            validationWeek = true;
          }else{
            validationWeek = false;
            setErrorWeek("Só temos 12 meses no ano");
          }
        }
      }else{
        validationWeek = false;
        setErrorWeek("No minimo 2 caracteres");
      }
    }else{
      
      validationWeek = false;
      setErrorWeek("Insira um mês valido")
    }

    if(cardYear){
      if(cardYear.length === 2){
        if(!/^\d+$/.test(cardYear)){
          validationYear = false;
          setErrorWeek("O Ano não pode ter letras")   
        }else{
          if(Number(cardYear) >= 23){
            validationYear = true;
          }else{
            validationYear = false;
            setErrorWeek("Insira um ano valido")   
          }
        }
      }else{
        validationYear = false;
        setErrorWeek("Insira um ano valido")      
      }
    }else{
      validationYear = false;
      setErrorWeek("Insira um ano valido")
    }

    if(cardCvc){
      if(cardCvc.length === 3){
        if(!/^\d+$/.test(cardCvc)){    
            validationCVC = false;
            setErrorCVC("Insira um cvc valido")
        }else{
          validationCVC = true;
        }
      }else{  
        validationCVC = false;
        setErrorCVC("Insira um cvc valido")
      }
    }else{
      validationCVC = false;
      setErrorCVC("Insira um cvc valido")
    }

    if(validationHolder && validationCard && validationWeek && validationYear && validationCVC){
      setConfirm(true);
    }else{
      return false;
    }

  }


  return (
    <div className="App">
      <Loadinglayer className={ loading ? "carregando-off" : "carregando-on"}/>
      { 
      
      modal 
      
      ?

      <div className='modal-info'>
        <div className='modal-container'>
          <div className='modal-titulo'>
              <h2>Aviso</h2>
              <hr></hr>
          </div>
          <div className='modal-desc'>
            <p>Isso é apenas um projeto front-end, nada que você colocar nesse formulário será enviado para lugar algum.</p>
          </div>
          <button onClick={() => {setModal(false)}}>Fechar Aviso</button>
        </div>
      </div> 
      
      : 
      
      ""

      }
      <div className='header-primary'>
        <div className='row'>
          <div className='col-md-3 images'>
            <div className='card-front'>
              <div className='circles'>
                  <div className='circle-one'></div>
                  <div className='circle-two'></div>
              </div>
              <div className='wrapper-card-front'>
              <div className='cardnumber'>
                    {
                      <p style={{color: "white"}}>{cardFormatter ? cardFormatter.substring(0, 19) : "0000 0000 0000 0000"}</p>
                    }
                </div>
                <div className='name-and-mmvv'>
                    <p>{cardHolder.substring(0,32)}</p>
                    <p>{cardWeek ? cardWeek.substring(0,2) : "00"}/{cardYear.substring(0,2) ? cardYear : "00"}</p>
                </div>
              </div>
            </div>
            <div className='card-back'>
                <div className='cvc'>
                  {cardCvc ? cardCvc.substring(0,3) : "000" }
                </div>
            </div>
          </div>
          <div className='col-md-9 formulario'>
              <div className='container form'>
              <div className="form-card">
              <Confirmlayer className={confirm ? "confirm-on corfirm" : "confirm-off confirm" } transition={transition} />
              <div className="mb-3">
                  <Input id="cardname" name="cardholder" label="CARDHOLDER NAME"  value={cardHolder} setValue={({target}) => validateCardHolder(target.value)} placeholder="e.g:. Amanda Fernandes" maxLength="32" style={{ borderColor: errorHolder ? "red" : null }}/>
                  {errorHolder && <p style={{fontSize: "10px",color: "red", padding: "6px !important"}}>{errorHolder}</p>}
                </div>
                <div className="mb-3"> 
                  <Input id="cardnumber" name="cardnumber" label="CARD NUMBER" value={cardNumber}setValue={({target}) => validateCreditCard(target.value)} placeholder="e.g:. 2233 2233 2333 2333" maxLength="19" style={{ borderColor: errorCard ? "red" : null }}/>
                {errorCard && <p style={{fontSize: "10px",color: "red", padding: "6px !important"}}>{errorCard}</p>}
                </div>
                
                  <div className='form-verify'>
                      
                      <div className='verify-form'>
                              <label className="card-label" htmlFor="cardweek"style={{ width: "100%", marginBottom: "0"}}>{"(MM/YY)"}</label>
                              <div className='verify-form-2'>
                              <Input id="cardweek" name="cardweek" label="" value={cardWeek} setValue={({target}) => validateCreditCardWeek(target.value)} placeholder="MM" maxLength="2" style={{ borderColor: errorWeek ? "red" : null }}/>
                              <Input id="cardyear" name="cardyear" label="" value={cardYear} setValue={({target}) => validateCreditCardYear(target.value)} placeholder="YY" maxLength="2" style={{ borderColor: errorWeek ? "red" : null }}/>
                              </div>
                
                      </div>
                      <div className='verify-col'>
                        <Input id="cardcvc" name="cardcvv" label="CVC" value={cardCvc} setValue={({target}) => validateCreditCardCVC(target.value)} placeholder="e.g. 123" maxLength="3" style={{ borderColor: errorCVC ? "red" : null }}/>
                      </div>
                      
                  </div>
                  {errorWeek ? <p className='alert' style={{fontSize: "10px",color: "red", padding: "6px !important"}}>{errorWeek}</p> : <p style={{fontSize: "10px",color: "red", padding: "6px !important"}}></p>}
                  {errorCVC ? <p className='alert' style={{fontSize: "10px",color: "red", padding: "6px !important"}}>{errorCVC}</p> : <p className='alert' style={{fontSize: "10px",color: "red", padding: "6px !important"}}></p>}
                     
                <div className="mb-3">
                  <button onClick={validationReal} className='cardbutton'>Confirm</button>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
