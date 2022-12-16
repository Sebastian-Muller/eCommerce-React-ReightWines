import { TYPES } from "../actions/shoppingActions";




export const shoppingInitialState = {

    products: [
        { id: 1, name: "vino 1", price: 600 },
        { id: 2, name: "vino 2", price: 1200 },
        { id: 3, name: "whisky 1", price: 2500 },
        { id: 4, name: "whisky 2", price: 4500 },
        { id: 5, name: "espumante 1", price: 1500 },
        { id: 6, name: "espumante 2", price: 2000 }
    ],
    cart: [],
};



export const shoppingReducer = (state, action) => {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            const newItem = state.products.find((product) => product.id === action.payload);

            const itemInCart = state.cart.find(item => item.id === newItem.id);

            return itemInCart
                ? {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === newItem.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                }
                : {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }]
                };

        }
        case TYPES.REMOVE_ONE_PRODUCT: {

            const itemToDelete = state.cart.find(
                (item) => item.id === action.payload);

            return itemToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map(item => item.id === action.payload
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                    ),
                }
                : {
                    ...state,
                    cart: state.cart.filter((item) => item.id !== action.payload)
                };
        }
        case TYPES.REMOVE_ALL_PRODUCTS: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        }
        case TYPES.CLEAR_CART: {
            return shoppingInitialState;
        }

        default:
            return state;
    }
};
