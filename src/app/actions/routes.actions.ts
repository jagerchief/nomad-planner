import {Route} from '../models/route';
import { Action } from '@ngrx/store';

export const ADD_ROUTE      = '[ROUTE] Add';
export const REMOVE_ROUTE    = '[ROUTE] Remove';

export class AddRoute implements Action {
    readonly type = ADD_ROUTE;
    constructor(public payload: Route) {}
}

export class RemoveRoute implements Action {
    readonly type = REMOVE_ROUTE;
    constructor(public payload: number) {}
}

// Section 4
export type Actions = AddRoute | RemoveRoute;
