import { TYPES } from "../actions/shoppingActions";


export const shoppingInitialState = {
    products: [],
    cart: [],
    openCardModal: false,
};


export const shoppingReducer = (state, action) => {
    switch (action.type) {
        case TYPES.READ_STATE: {
            return {
                ...state,
                products: action.payload[0],
                cart: action.payload[1]
            };
        }

        case TYPES.ADD_TO_CART: {
            const newItem = state.products.find(
                (product) => product.id === action.payload //el action.payload hay que cambiarlo y poner el item completo
            );

            const itemInCart = state.cart.find((item) => item.id === newItem.id);

            return itemInCart
                ? {
                //Acá va la petición PUT, se conserva el estado y se hace PUT del newItem.quantity++
                }
                : {
                //Acá va el POST, se hace un POST de newItem en el endpoint http://localhost:5000/${newItem.id}
                }
        }
        case TYPES.REMOVE_ONE_PRODUCT: {
            const itemToDelete = state.cart.find(
                (item) => item.id === action.payload
            );

            return itemToDelete.quantity > 1
                ? {
                    //aca se hace un PUT subiendo un item.quantity-- o -=1
                }
                : {
                    //aca se hace un DELETE del item usando su id, quizá se pueda pedir una confirmación, opcional
                };
        }
        case TYPES.REMOVE_ALL_PRODUCTS: {
            //aca se hace un DELETE usando el id del item
            };

        case TYPES.CLEAR_CART: {
            //aca se limpia el cart del estado y se lo sube vacío al server (se puede ver otra forma)
        }

        case TYPES.OPEN_CARD_MODAL: {
            return state.openCardModal === false
                ? {openCardModal: state.openCardModal = true}
                : {...state} ;
        }
        case TYPES.CLOSE_CARD_MODAL: {
            return state.openCardModal === true
                ? {openCardModal: state.openCardModal = false}
                : {...state} ;
        }

        default:
            return state;
    }
};


