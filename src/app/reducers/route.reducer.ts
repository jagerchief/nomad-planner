import {Route} from '../models/route';
import * as RouteActions from './../actions/routes.actions';


const initialState = loadState();

export function reducer(state: Route[] = initialState, action: RouteActions.Actions) {
    console.log('ACCION EN EL REDUCER: '+action.type);
    switch (action.type) {
        case RouteActions.ADD_ROUTE:
            return [...state, action.payload];
        default:
            return state;
    }
}

//this shoul be in localstorage service but I dont know how to call it
function loadState() {
    try {
        const serializedData = localStorage.getItem('state');
        if (serializedData === null) {
            return [];
        }
        return JSON.parse(serializedData);
    } catch (error) {
        return [];
    }
}
