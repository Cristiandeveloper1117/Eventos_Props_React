// VAMOS A USAR UN ATAJO AHORA SE LLAMA RAFC
//NOS GENERA LA ESTRUCTURA YA 
//ya lo podemos utilizar dentro de app
// LO IMPORTAMOS AL VERLO IMPORTADO EN APP SE IMPORTA CON LLAVES
//POR QUE NO LLEVA EL DEFAULT EN EL EXPORT
import React from 'react'

export const SegundoComponente = () => {
//TENEMOS UNA CONSTANTE CON ARRAY DE LIBROS
const libros = ["Harry poter", "Juego de tronos", "Clean code"]

const librosdos = [];

return (
    <div className='segundo-componente'>
        <h1>Listado de libros </h1>
        <ul>
{/*LLAMO A LIBROS Y INDICE 0*/}
            <li>{libros[0]}</li>
            <li>{libros[1]}</li>
            <li>{libros[2]}</li>
        </ul>
{/*Y TI TENEMOS MAS DE 500 LIBROS COMO MOSTRAMOS TODOS*/}
{
    libros.map((libros, indice) => {
        return <li key={indice}>{libros}</li>
    })
}
{/* PRIMER EJEMPLO CON LIBROS */}


{/* SEGUNDO EJEMPLO DESDE UN ARRAY VACIO  */}
<h2>DESDE UN ARRAY VACIO</h2>
{
librosdos.length >= 1 ?
(<ul>
        {
            librosdos.map((librosdos, indice) => {
                return <li key={indice}> {librosdos}</li>;
            })
        }
    </ul>)
    :(<p>No hay libros</p>)
}
    </div>
)
}

//VAMOS A CREAR UN TERCER COMPONENTE AHORA
