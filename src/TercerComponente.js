//APRENDER UN POCO SOBRE COMUNICACION CON COMPONENTES
//ATAJO  rafc
//VAMOS A HACER COMUNICACION ENTRE COMPONENTES PASAR DATOS
//Y COMO LO HACEMOS CON LAS PROPS SON PROPIEDADES QUE PUEDO
//PASAR A LA FUNCION DE MI COMPONENTE PARA YO INDICAR
//QUE VOY A RECIBIR UNOS DATOS
//Y LE PODEMOS PASAR ESOS VALORES A LOS DATOS 
// EN LA PARTE DONDE RENDERIZAMOS EL COMPONENTE
//CUANDO LLAMO A SU ETIQUETA
//PUEDO AGREGAR LAS PROPS QUE QUIERA Y PASARLE LOS VALORES QUE QUIERA
import React from 'react'
import PropTypes from 'prop-types';

// export const TercerComponente = (props) => {
  
// console.log(props)
  
//     return (
//     <div>
        
//         <h1>Comunicacion entre componentes</h1>
//     <ul>
//         <li>{props.nombre}</li>
//         <li>{props.apellido}</li>
//         <li>{props.ficha.grupo}</li>
//         <li>{props.ficha.estado}</li>
//     </ul>
//     </div>
//   )
// }

//HACER EL PASO DE ESCRIBIR PROPS PROPS SE PUEDE HACER PERO CON LA DESTRUCTURACION
//EN EL LUGAR DE LAS PROPS PUEDO UTILIZAR LAS LLAVES , COMENTAMOS EL CODIGO DE ARRIBA
// Y LO EDITAMOS SI QUEREMOS VER ALGUN METODO SOLO DEJAMOS SIN COMENTAR EL QUE QUEREMOS VIZUALIZAR
// CAMBIAMOS PROPS POR Y ENTRE LLAVES

//DESCTRUCTURING
// export const TercerComponente = ({nombre, apellido, ficha}) => {
  
//     // console.log(props)
      
//         return (
//         <div>
            
//             <h1>Comunicacion entre componentes</h1>
//         <ul>
//             <li>{nombre}</li>
//             <li>{apellido}</li>
//             <li>{ficha.grupo}</li>
//             <li>{ficha.estado}</li>
//         </ul>
//         </div>
//       )
//     }

//     //ENTONCES ASI PODEMOS ENVIAR DATOS DESDE UN COMPONENTE QUE SERIA APP
//     //HASTA EL OTRO QUE ES TERCERCOMPONENTE

//     //VIDEO 28 PROTOTYPES Y VALIDACIONES DE PROPS
// // CUANDO HACEMOS USO DE LAS PROPS PARA COMUNICAR COMPONENTES
// // TENEMOS LA POSIBILIDAD DE VALIDAR ESAS PROPS
// // Y DE PONER CIERTOS FILTOS PARA VALIDAR LA INFORMACION
// // PODEMOS VALIDAR QUE LOS LI DE NOMBRE SEA UN OBJETO APELLIDO UN ARRAY
// // UTILIZANDO PROTOTYPE LO IMPORTAMOS ARRIBA


// //TENER EN CUENTA EL PROP TYPE ACA EMPIEZA EN MINUSCULA
// TercerComponente.propTypes = {
//     nombre: PropTypes.string.isRequired, //VALIDAMOS QUE ES ESTRING
//     apellido: PropTypes.string.isRequired,
//     ficha: PropTypes.object //VALIDAMOS QUE ES OBJETO

//-----COMENTAMOS EL CODIGO EJEMPLOS ANTERIOR--------


//-----------------------------------------//
//VIDEO 29
//APARTE DE VALIDAR TAMBIEN PODEMOS PASAR PARAMETROS POR DEFECTO
//VAMOS A APP Y COMPONENTE TRES LE SAAMOS LOS VALORES
export const TercerComponente = ({
nombre,
apellido, 
ficha}) => {
  
    // console.log(props)
      
        return (
        <div>
            
            <h1>Comunicacion entre componentes</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>{ficha.grupo}</li>
            <li>{ficha.estado}</li>
        </ul>
        </div>
      )
    }

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired, //VALIDAMOS QUE ES ESTRING
    apellido: PropTypes.string.isRequired,
    ficha: PropTypes.object

}

//por aca abajo podemos poner una default props
TercerComponente.defaultProps = {
nombre:"Chloicita",
apellido: "Aitana"
}
//Tambien podemos cambiar los datos de esta manera

//BIEN PASAMOS AL VIDEO 30 EVENTOS CLICK
//CUANDO SUCEDE UNA ACCION QUE PASE ALGO



