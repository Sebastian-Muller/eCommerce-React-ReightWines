import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navegacion from "../components/Navegacion"
import Main from "../components/Main"
import Nosotros from "../components/Nosotros"
import Gift from "../components/Gift"
import Contacto from "../components/Contacto"
import ShoppingCart from "../components/shopping/ShoppingCart"
import Login from "../components/Login"
import Error404 from "../components/Error404"
import Footer from "../components/Footer/Footer"
import CardList from "../components/CardList"

const Rutas = () => {


    return (
        <Router>
            <Navegacion />
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/bebidas" element={<CardList/>}/>
                <Route path="/nosotros" element={<Nosotros/>}/>
                <Route path="/gift" element={<Gift/>}/>
                <Route path="/contacto" element={<Contacto/>}/>
                <Route path="/carro" element={<ShoppingCart/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
            <Footer />
        </Router>
    )
}



export default Rutas