import { createContext, useReducer, useEffect} from "react"
import { TYPES } from "../actions/shoppingActions";
import { shoppingInitialState, shoppingReducer } from "../reducer/shoppingReducer";
import axios from "axios";



export const ProductsContext = createContext();


const ProductsProvider = ({children}) => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const {products} = state;
  
  const addToCart = (id) => {dispatch({type: TYPES.ADD_TO_CART, payload:id})};

  const updateState = async () => {
    const ENDPOINT = {
        products: "http://localhost:5000/products",
        cart: "http://localhost:5000/cart",
    };
    const resProducts = await axios.get(ENDPOINT.products),
        resCart = await axios.get(ENDPOINT.cart);

    const productsList = await resProducts.data,
        cartItems = await resCart.data;

    dispatch({type: TYPES.READ_STATE, payload: [productsList, cartItems] });
  };

  useEffect(() => {
      updateState();
  }, []);

  const handleModalOpen = () => {dispatch({type: TYPES.OPEN_CARD_MODAL})};

  const data = {
    shoppingInitialState, 
    shoppingReducer, 
    TYPES,
    state, 
    dispatch,
    addToCart,
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