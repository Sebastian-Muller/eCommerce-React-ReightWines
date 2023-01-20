import { useEffect, createContext, useReducer} from "react"
import { TYPES } from "../actions/shoppingActions";
import { shoppingInitialState, shoppingReducer } from "../reducer/shoppingReducer";
import axios from "axios";



export const ProductsContext = createContext();


const ProductsProvider = ({children}) => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  

    const getData = async () => {
      const ENDPOINT = {
        products: "http://localhost:5000/products",
        cart: "http://localhost:5000/cart",
      };
      return {
        resProducts: await axios.get(ENDPOINT.products),
        resCart: await axios.get(ENDPOINT.cart),
      };
    };
  
    const updateState = async () => {
      const { resProducts, resCart } = await getData();
  
      dispatch({type: TYPES.READ_STATE, payload: [resProducts.data, resCart.data]});
    };

  
  
    const addToCart = async (id) => {
      const delay = 100;
      const endpoints = {
        products: "http://localhost:5000/products",
        cart: "http://localhost:5000/cart",
      };
        const resProducts = await axios.get(endpoints.products),
        resCart = await axios.get(endpoints.cart);

        const productsList = resProducts.data,
        cartItems = resCart.data;

      const newItem = productsList.find((product) => product.id === id),
        itemInCart = cartItems.find((item) => item.id === id);
  
      let endpoint 
      const options = {
        headers: "content-type: application/json",
      };
  
      if (!itemInCart) {
        options.method = "POST"
        endpoint = `http://localhost:5000/cart`
        newItem.quantity = 1
        options.data = JSON.stringify(newItem)
      } else {
        options.method = "PUT"
        endpoint = `http://localhost:5000/cart/${itemInCart.id}`
        itemInCart.quantity = itemInCart.quantity +=1
        options.data = JSON.stringify(itemInCart)
        console.log(itemInCart.quantity)
      }
      await axios(endpoint, options) 
  
      dispatch({type: TYPES.ADD_TO_CART, payload: id});
  
      setTimeout(async ()=>{
        await updateState()
        }, delay)
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

    const products = state.products,
    cart = state.cart

  const data = {
    state, 
    dispatch,
    updateState,
    addToCart,
    delFromCart,
    clearCart,
    products,
    cart,
    handleModalOpen
  }

  return (
    <ProductsContext.Provider value={data}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider