import './App.css';


function App() {


  const animais = [{
    id: (Math.random() * (0 - 9000) + 9000).toFixed(),    
    nome: 'Avestruz',
    image: 'https://blog.cobasi.com.br/wp-content/uploads/2021/06/avestruz-2.png',
    preco: 5,
    numero: 0,
  },{
    id: (Math.random() * (0 - 9000) + 9000).toFixed(),    
    nome: 'Aguia',
    image: 'https://img.freepik.com/fotos-gratis/olhar-de-aguia_1958-242.jpg?w=2000',
    preco: 10,
    numero: 1,
  },{
    id: (Math.random() * (0 - 9000) + 9000).toFixed(),    
    nome: 'Burro',
    image: 'https://thumbs.dreamstime.com/b/burro-1-2856994.jpg',
    preco: 15,
    numero: 2,
  },{
    id: (Math.random() * (0 - 9000) + 9000).toFixed(),    
    nome: 'Borboleta',
    image: 'https://static.dicionariodesimbolos.com.br/upload/e4/da/borboleta-7_xl.jpeg',
    preco: 20,
    numero: 3,
  },{
    id: (Math.random() * (0 - 9000) + 9000).toFixed(),    
    nome: 'Cachorro',
    image: 'https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png',
    preco: 25,
    numero: 4,
  },{
    id: (Math.random() * (0 - 9000) + 9000).toFixed(),    
    nome: 'Cabra',
    image: 'https://www.petz.com.br/blog/wp-content/uploads/2022/01/cabra-de-estimacao.jpg',
    preco: 30,
    numero: 5,
  },{
    id: (Math.random() * (0 - 9000) + 9000).toFixed(),    
    nome: 'Carneiro',
    image: 'http://www.portaldosanimais.com.br/wp-content/uploads/2019/09/Carneiro-e1569501859103.jpg',
    preco: 35,
    numero: 6,
  },{
    id: (Math.random() * (0 - 9000) + 9000).toFixed(),    
    nome: 'Camelo',
    image: 'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3148363:1634316084/img1.jpg?f=default&$p$f=48c01ef',
    preco: 40,
    numero: 7,
  },{
    id: (Math.random() * (0 - 9000) + 9000).toFixed(),    
    nome: 'Cobra',
    image: 'https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2019/09/cobra-tudo-o-que-voce-precisa-saber-sobre-o-odiado-animal.jpg',
    preco: 45,
    numero: 8,
  },{
    id: (Math.random() * (0 - 9000) + 9000).toFixed(),    
    nome: 'Coelho',
    image: 'https://www.petlove.com.br/images/breeds/227696/profile/original/perfil-coelho.jpg?1597789099',
    preco: 50,
    numero: 8,
  },];

  
  var Capital = 0;
  var numeroApostado = null;
  var Carteira = 15;
  var randomNumber = 0;

  function selecionarAnimal(){
    for(var i = 0; i < animais.length; i++){
      document.querySelectorAll('.animal')[i].classList.remove("animal-aparece");
    }
    randomNumber = (Math.random() * (0 - ( animais.length - 1 )) + (animais.length - 1)).toFixed();
    document.querySelectorAll('.animal')[randomNumber].classList.add("animal-aparece");
    document.querySelector('.nname').innerHTML = animais[randomNumber].nome;
    document.querySelector('.rodar').removeAttribute('disabled');
    for(let i = 0; i < animais.length; i++){
      document.querySelectorAll('.post-button-control')[i].removeAttribute('disabled');
    }

    if(randomNumber == numeroApostado){
      alert('venceu!')
      Carteira = Carteira + Capital * 2;
      Capital = 0;
      document.querySelector('.Carteira').innerHTML = "Carteira: R$"+Carteira+",00";
    }else{
      Capital = 0;
    }


  }

   function pegarNumero(numero,numerodois){
    if(Capital > 0){
      alert('Opa não é possivel, fazer essa aposta!')
    }else{
    if(numero > Carteira){
      alert('Opa não é possivel, fazer essa aposta!')
      for(let i = 0; i < animais.length; i++){
        document.querySelectorAll('.post-button-control')[i].removeAttribute('disabled','');
      }
    }else if(numero === Carteira || numero < Carteira){
    for(let i = 0; i < animais.length; i++){
      document.querySelectorAll('.post-button-control')[i].setAttribute('disabled','');
    }
    document.querySelectorAll('.post-button-control')[numerodois].removeAttribute('disabled');
    Carteira = Carteira - numero;
    Capital+=numero;
    numeroApostado = numerodois;
    document.querySelector('.Carteira').innerHTML = "Carteira: R$"+Carteira+",00";
    }
  }
  }


  function começarRolar(){
    document.querySelector('.rodar').setAttribute('disabled','');
    for(let i = 0; i < animais.length; i++){
      document.querySelectorAll('.post-button-control')[i].setAttribute('disabled','');
    }
    var mount = 0;
    var roleta = setInterval(function(){
      mount+=1;
      if(mount === animais.length){
        mount = 0;
      }
      for(var i = 0; i < animais.length; i++){
        document.querySelectorAll('.animal')[i].classList.remove("animal-aparece");
      }
      document.querySelectorAll('.animal')[mount].classList.add("animal-aparece");
      console.log(mount)
    }, 400);


    setTimeout(function(){
      clearInterval(roleta)
      selecionarAnimal();
    },4000)

  }

  function regras(){
    alert(`Regras:
  - Você pode apostar em um bicho;
  - Se seu dinheiro acabar o jogo também acaba;
  - Se divirta ;)

    `)
  }

  function resetar(){
    Carteira = 15;
    Capital = 0;
    document.querySelector('.Carteira').innerHTML = "Carteira: R$"+Carteira+",00";
  }

  return (
    <div className="App">

      <div className='animais'>
        <div className='animal-rewrapper'>              
            <div className='animais-wrapper'>
            {
                animais.map((val)=>
                    <div key={val.id} className="animal">
                      <div className='animal-image'>
                        <img key={val.id} src={val.image} alt=""/>
                      </div>
                      <h2 className='title-animal'>{val.nome}</h2>
                      </div>
                    )
              }
            </div>
        </div>
        </div>
        <div className='control-wrapper'>
        <div className='control'>
          <div className='info'>
              <h2 className='nname'>Animal Sorteado</h2>
              <h2 className='Carteira'>Carteira: R$15,00</h2>
          </div>
          <div className='control-main'>
              <button className='rodar' onClick={começarRolar}>Rolar</button>
              <button className='rodar' onClick={regras}>Ler Regras</button>    
              <button className='resetar' onClick={resetar}>Resetar</button>       
          </div>
          {
                animais.map((val)=>
                    <div key={val.id} className="animal-control">
                        <button className='post-button-control' onClick={() => pegarNumero(val.preco, val.numero)}>{val.nome} - R${val.preco},00</button>
                    </div>
                    )
              }
        </div>
      </div>
  
    </div>
  );
}

export default App;
