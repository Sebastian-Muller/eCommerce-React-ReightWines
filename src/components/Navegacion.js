import { Link, NavLink } from "react-router-dom"







const Navegacion = () => {
  return (
    <nav style={{
        display: "flex",
        width:"100%",
        height:"20vh",
        justifyContent:"space-evenly",
        alignItems:"center"
    }}>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/bebidas">Bebidas</NavLink>
        <NavLink to="/nosotros">Nosotros</NavLink>
        <NavLink to="/gift">Gift</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
        <NavLink to="/carro">Carro</NavLink>
        <NavLink to="/login">Login</NavLink>
    </nav>
  )
}

export default Navegacion