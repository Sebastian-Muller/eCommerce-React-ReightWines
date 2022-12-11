import { NavLink } from "react-router-dom"









const Navegacion = () => {
  return (
    <nav styled={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "spaceBetween",
      alignItems: "center"
    }}>
        <NavLink style={{color: "var(--beige)"}} to="/">Inicio</NavLink>
        <NavLink style={{color: "var(--beige)"}} to="/bebidas">Bebidas</NavLink>
        <NavLink style={{color: "var(--beige)"}} to="/nosotros">Nosotros</NavLink>
        <NavLink style={{color: "var(--beige)"}} to="/gift">Gift</NavLink>
        <NavLink style={{color: "var(--beige)"}} to="/contacto">Contacto</NavLink>
        <NavLink style={{color: "var(--beige)"}} to="/carro">Carro</NavLink>
        <NavLink style={{color: "var(--beige)"}} to="/login">Login</NavLink>
    </nav>
  )
}

export default Navegacion


