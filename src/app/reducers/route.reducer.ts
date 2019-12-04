import {Route} from '../models/route';
import * as RouteActions from './../actions/routes.actions';
import {fromJS} from 'immutable';

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

function loadState() {
    try {
        const serializedData = localStorage.getItem('state');
        console.log('loading state: '+ serializedData);
        if (serializedData === null) {
            return [];
        }
        console.log(JSON.parse(serializedData));
        return JSON.parse(serializedData);
    } catch (error) {
        console.log(error);
        return [];
    }
}
