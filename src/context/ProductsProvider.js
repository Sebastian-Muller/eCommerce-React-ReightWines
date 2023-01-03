import { createContext } from "react"
import { TYPES } from "../actions/shoppingActions";
import { shoppingInitialState, shoppingReducer } from "../reducer/shoppingReducer";


const data = [
  shoppingInitialState, shoppingReducer, TYPES,
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