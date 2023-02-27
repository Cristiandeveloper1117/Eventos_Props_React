//RAFC ATAJO

import React from 'react'
//UNA VES CREADO EL COMPONENTE LO LLAMAMOS DENTRO DE APP

export const EventosComponentes = () => {
//TAMBIEN TENEMOS ESTA FORM DE CREAR BOTON FORMA 2
// PRIMER EJEMPLO FORMA DOS COMENTADO

// const hasDadoClick = (e) => {
//     alert("Haz dado un nuevo click")
// }  

//SEGUNDO EJEMPLO FORMA DOS
//SI YO QUISIERA PASARLE UN PARAMETRO

const hasDadoClick = (e, nombre) => {
    alert("Haz dado un nuevo click " +nombre);
}  

function HazDadoDobleClick () {
    alert ("Haz dado doble click");
}

//NOS SALE EL FOQUITO Y LO CONVIERTE A TEMPLATE ESTRING
const hasEntrado = (e, accion) => {
    alert(`Has ${accion} entrado a lacaja con el mouse`)
}


//DESPUES LO CONCATENAMOS EN EL ALER + NOMBRE
// si lo dejamos asi ejecuta solo tenemos que ir a button
return (
    <div>
        <h1>Eventos React</h1>
        
        {/* EVENTO CLICK FORMA 1 */}
        {/* DENTRO DE LAS LLAVES PUEDO EJECUTAR UNA FUNCION
        QUE TENGA DEFINIDA FUERA DEL RETUR O MISMAMENTE ADENTRO UNA ANONIMA
        COMO DEFINO UNA FUNCION ANONIMA CON FUNCION DE FLECHA*/}
        
        {/*EJEMPLO 1 COMENTADO  */}
        {/* <button onClick={ () => {
          console.log("Hola soy un evento click");
        }}>Dame Click</button> */}

        {/* EVENTO CLICK FORMA 2 */}
        {/* LLAMAMOS A LA FUNCION DE ARRIBA */}
        {/*EVENTO CLICK FORMA 2 COMENTADA PARA PASAR A EJEMPLO 3  */}
    
        {/* <button onClick={ hasDadoClick }>Dame Click</button> */}

        {/* EVENTO CLICK FORMA 3 PASANDOLE PARAMETRO */}

        <button onClick={ e => hasDadoClick (e, "Mama") }>Dame Click</button>
    
        {/* para que ejemplo 3 funcione 
        pasamos como parametro e y invocamos una funcion
        despues al lado de mama pasamos la funcion e, antes del nombre  */}
        
        {/* EVENTO DOBLE CLICK VIDEO 31 */}

        
        <button onDoubleClick={ HazDadoDobleClick }>Doble Click</button>


     {/* VIDEO 32 EVENTO ON MOUSE */}
<div id="caja" 
onMouseEnter = {e => hasEntrado (e, "entrado")} //FUNCION QUE TENEMOS QUE CREAR ARRIBA
onMouseLeave=  {e => hasEntrado (e, "salido")}> 
Pasar Mouse

</div>

</div>
  )
}

//VIDEO 31 DOBLE CLICK CREAMOS OTRO BOTON ARRIBA

