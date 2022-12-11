import { Link, NavLink } from "react-router-dom"
import logoNav from "../assets/images/logoNav.webp"






const Navegacion = () => {
  return (
    <nav className="navegacion">
        <img src={logoNav} alt="aaa" height="80px" width="90px"/>
        <NavLink to="/" className="navItem">Inicio</NavLink>
        <NavLink to="/bebidas" className="navItem">Bebidas</NavLink>
        <NavLink to="/nosotros" className="navItem">Nosotros</NavLink>
        <NavLink to="/gift" className="navItem">Gift</NavLink>
        <NavLink to="/contacto" className="navItem">Contacto</NavLink>
        <NavLink to="/carro"><i class="fa-solid fa-cart-shopping"></i></NavLink>
        <NavLink to="/login"><i class="fa-solid fa-user"></i></NavLink>
    </nav>
  )
}

export default Navegacion