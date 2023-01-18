import { createContext, useReducer, useEffect} from "react"
import { TYPES } from "../actions/shoppingActions";
import { shoppingInitialState, shoppingReducer } from "../reducer/shoppingReducer";
import axios from "axios";



export const ProductsContext = createContext();


const ProductsProvider = ({children}) => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const {products} = state;

    const updateState = async () => {
      const ENDPOINT = {
        products: "http://localhost:5000/products",
        cart:"http://localhost:5000/cart"
      }
      const resProducts = await axios.get(ENDPOINT.products),
        resCart = await axios.get(ENDPOINT.cart);
    
      const productsList= await resProducts.data,
      cartItems = await resCart.data;
    
        dispatch({type: TYPES.READ_STATE, payload: [productsList, cartItems]})
    }
  
  const addToCart = (id) => {
    dispatch({type: TYPES.ADD_TO_CART, payload: id})
  };

  const delFromCart = (id, all) => {
    if(all){
      dispatch({type: TYPES.REMOVE_ALL_PRODUCTS, payload:id})
    } else {
      dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload:id})
    }
  };
  
  const clearCart = () => {

    
  }

  useEffect(() => {
      updateState();
  }, []);

  const handleModalOpen = () => {dispatch({type: TYPES.OPEN_CARD_MODAL})};

  const data = {
    state, 
    dispatch,
    updateState,
    addToCart,
    delFromCart,
    clearCart,
    products,
    handleModalOpen
  }

  return (
    <ProductsContext.Provider value={data}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider