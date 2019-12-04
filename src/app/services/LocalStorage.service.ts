import {Injectable} from '@angular/core';
import {fromJS} from 'immutable';

@Injectable()
export class LocalStorageService {

    saveState(state) {
        try {
            const serializedData = JSON.stringify(state);
            localStorage.setItem('state', serializedData);
        } catch (error) {
        }
    }
}

