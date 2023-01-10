import { createContext, useReducer} from "react"
import { TYPES } from "../actions/shoppingActions";
import { shoppingInitialState, shoppingReducer } from "../reducer/shoppingReducer";



export const ProductsContext = createContext();


const ProductsProvider = ({children}) => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  
  const addToCart = (id) => {dispatch({type: TYPES.ADD_TO_CART, payload:id})};

  const data = {
    shoppingInitialState, 
    shoppingReducer, 
    TYPES,
    state, 
    dispatch,
    addToCart
  }

  return (
    <ProductsContext.Provider value={data}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider