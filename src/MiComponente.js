//Importar modulos de react / dependencias 
import { Fragment } from "react";

//FUNCION DEL COMPONENTE
//1 DENTRO DEL COMPONENTE EL RETURN DEVUELVE EL HTML
const MiComponente = () => {
//si creo una variable con const el valor no se actualiza
let nombre = "cristian";
let web = "cristiandeveloper.stack"
//Pero si queremos tener algo mas complejo un objeto de usuario
let usuario = {
    nombre:"Cristian Daniel",
    apellido: "Vera Daniel",
    web: "Cristianreact.react"

}
//en el caso que queremos imprimir un objeto completo hacemos asi
//<li> Nombre: {JSON.stringify(usuario)}</li>

    return (
    <>
    <p>Este mi primer componente</p>
    <ul>
        <li>React</li>
        <li>Angular</li>
        <li>Vue</li>
    </ul>
    <h3>Datos desde variable</h3>
    <ul>
    {/* IMPRIME OBJETO COMPLETO */}
    {/* <li> Nombre: {JSON.stringify(usuario)}</li> */}
        <li> Nombre: {nombre}</li>
        <li>Web: {web}</li>
        <li>Desde objeto: {usuario.nombre}</li>
        <li>Desde objeto: {usuario.apellido}</li>
        <li>Desde objeto: {usuario.web}</li>

    </ul>
    </>
    );
};

//EXPORT
export default MiComponente;
//HASTA ACA LLEGAMOS CON EL VIDEO 25 AHORA VAMOS A CREAR UN SEGUNDO COMPONENTE APARTE