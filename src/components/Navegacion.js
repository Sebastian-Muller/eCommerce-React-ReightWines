

import { NavLink } from "react-router-dom"
import logoNav from "../assets/images/logoNav.webp"
import BotonHamburguesa from "./BotonHamburguesa"






const Navegacion = () => {
  return (
    <nav className="navegacion">

        <NavLink to="/" className="navItem"><img src={logoNav} alt="Reight" height="80px" width="90px"/></NavLink>
        <NavLink to="/bebidas" className="navItem">Bebidas</NavLink>
        <NavLink to="/nosotros" className="navItem">Nosotros</NavLink>
        <NavLink to="/gift" className="navItem">Gift</NavLink>
        <NavLink to="/contacto" className="navItem">Contacto</NavLink>
        <NavLink to="/carro"><i class="fa-solid fa-magnifying-glass"></i></NavLink>
        <NavLink to="/login"><i class="fa-solid fa-user"></i></NavLink>
        <NavLink to="/carro"><i class="fa-solid fa-cart-shopping"></i></NavLink>
          
      <div className="hamburguesa">
         <BotonHamburguesa/>
      </div>
        
    </nav>
  )
}

export default Navegacion







