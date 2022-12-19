/*
ESTE REDUCTOR SOLO TIENE EL DATO DE LA CLASE DE REDUCTOR, OSEA DEL CONTADOR
AQUÍ DEBERIAN AGREGAR TODOS LOS CASOS NECESARIOS PARA SUS COMPONENTES
DESPUES IMPORTAN EL ESTADO INICIAL Y EL REDUCTOR EN SUS COMPONENTES CON
import { initialState, reducer } from "../reducer/reducer";
*/
import { TYPES } from "../actions/shoppingActions";



export const  initialState = {
    contador: 0,
}


export const reducer = (state, action) => {
    switch (action.type) {
        case TYPES.INCREMENTAR:{}
        case TYPES.DECREMENTAR:{}
        case TYPES.RESETEAR:{}
        default:
            return state;
    }
}
