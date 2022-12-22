import { createContext } from "react"
import { TYPES } from "../actions/shoppingActions";
import { shoppingInitialState, shoppingReducer } from "../reducer/shoppingReducer";


const data = [
  /*
  AQUÍ GUARDAR LOS TYPES, ESTADO INICIAL, REDUCER, DB.JSON UNA VEZ IMPORTADOS
  PARA PASARLOS COMO PROP AL PROVEEDOR DEL CONTEXTO Y DESTRUCTURAR EN CADA
  COMPONENTE, SEGÚN NECESITEN
  */
];


export const ProductsContext = createContext();





const ProductsProvider = ({children}) => {
  return (
    <ProductsContext.Provider value={data}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider