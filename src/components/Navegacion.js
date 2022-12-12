

import { NavLink } from "react-router-dom"
import logoNav from "../assets/images/logoNav.webp"
import BotonHamburguesa from "./BotonHamburguesa"






const Navegacion = () => {
  return (
    <nav className="navegacion">

      <div className="logo">
        <NavLink to="/" className="navItem"><img src={logoNav} alt="Reight" height="90px" width="100px"/></NavLink>
      </div>

      <div className="items">
        <div>
        <NavLink to="/bebidas" className="navItem">Bebidas</NavLink>
        </div>
        <div>
        <NavLink to="/nosotros" className="navItem">Nosotros</NavLink>
        </div>
        <div>
        <NavLink to="/gift" className="navItem">Gift</NavLink>
        </div>
        <div>
        <NavLink to="/contacto" className="navItem">Contacto</NavLink>
        </div>
      </div>
      <div className="iconos">
        <i class="fa-solid fa-magnifying-glass"></i>
        <NavLink to="/login"><i class="fa-solid fa-user"></i></NavLink>
        <NavLink to="/carro"><i class="fa-solid fa-cart-shopping"></i></NavLink>
      </div>

      <div className="hamburguesa">
         <BotonHamburguesa/>
      </div>
        
    </nav>
  )
}

export default Navegacion







