import imagen0 from  './reyes/rey_atanagildo.png';
import imagen1 from  './reyes/rey_leogivildo.png';
import imagen2 from  './reyes/rey_sisebuto.png';
import rey from './reyes/rey_incognito.png';


import './miCss.css';

function App() {
   //let nombre={name:"Jab0", edad: 18};
   //let string = "abecedario";
   
  let nombres = ["Atanagildo", "Leogivildo", "Sisebuto"];
   
  const cambiarImagen = (e) => {
    if (e.target.src.includes("incognito")){
      e.target.style.visibility="hidden";
    } else {
        e.target.src=rey;
    }
    e.target.parentNode.style.backgroundColor="purple";

  }  


  const cambiarTexto = (e) => {
    if(e.target.innerHTML === "Visto"){
      e.target.innerHTML = '';
    } else {
      e.target.innerHTML = "Visto";
    }
  


  }

  return (
    
    <div className="contenedor">

     {/* <h1> curso react</h1>
        alert("Hola, es una Alerta js") 
      <input type="text" className='inputtext'/>
      <div>{nombre.name} {string}</div>  */}

    

      <div className='caja' > 
        <img onClick={cambiarImagen} src={imagen0} />
        <div onClick={cambiarTexto} className='nombre'>{nombres[0]} </div>
      </div>
      
      <div className='caja' > 
        <img onClick={cambiarImagen} src={imagen1} />
        <div onClick={cambiarTexto} className='nombre'>{nombres[1]} </div>
      </div>

      <div className='caja' > 
      <img onClick={cambiarImagen} src={imagen2} />
      <div onClick={cambiarTexto} className='nombre'>{nombres[2]} </div>
      </div>
      
      
      
    </div>

     
     

   
  );
}

export default App;
