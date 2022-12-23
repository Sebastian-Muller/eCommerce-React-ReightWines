import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navegacion from "../components/Navegacion"
import Main from "../components/Main"
import Bebidas from "../components/Bebidas"
import Nosotros from "../components/Nosotros"
import Gift from "../components/Gift"
import Contacto from "../components/Contacto"
import Login from "../components/Login"
import Error404 from "../components/Error404"
import ShoppingCart from "../components/shopping/ShoppingCart"
import Footer from "../components/Footer/Footer"

/***********
 * USAR EL CONTEXTO
 * 1 - IMPORTAR EL CONTEXT Y EL HOOK:
 * import { ProductsContext } from "../context/ProductsProvider"
 * import { useContext } from "react"
 * 
 * 2 - EJECUTAR EL CONTEXTO Y EXTRAER LA PROP (dentro del componente)
 * const data = useContext(ProductsContext)
 * 
 * 3 - DESTRUCTURAR LA PROP
 * const [let1, let2,let3, let4] = data;
************/


const Rutas = () => {


    return (
        <Router>
            <Navegacion style={{
        textAlign:"center"}}/>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/bebidas" element={<Bebidas/>}/>
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