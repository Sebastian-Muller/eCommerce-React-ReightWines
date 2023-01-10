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
                (product) => product.id === action.payload
            );

            const itemInCart = state.cart.find((item) => item.id === newItem.id);

            return itemInCart
                ? {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === newItem.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                }
                : {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }],
                };
        }
        case TYPES.REMOVE_ONE_PRODUCT: {
            const itemToDelete = state.cart.find(
                (item) => item.id === action.payload
            );

            return itemToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                }
                : {
                    ...state,
                    cart: state.cart.filter((item) => item.id !== action.payload),
                };
        }
        case TYPES.REMOVE_ALL_PRODUCTS: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        }
        case TYPES.CLEAR_CART: {
            return {
                ...state,
                cart: []
            };
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


