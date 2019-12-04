import {Route} from '../models/route';
import * as RouteActions from './../actions/routes.actions';

const initialState: Route = {
    name: 'Mock Route',
    imageUrl: 'https://asds.jpg'
};

export function reducer(state: Route[] = [initialState], action: RouteActions.Actions) {
    console.log('ACCION EN EL REDUCER: '+action.type);
    switch (action.type) {
        case RouteActions.ADD_ROUTE:
            return [...state, action.payload];
        default:
            return state;
    }
}
