import {Injectable} from '@angular/core';
import {fromJS} from 'immutable';

@Injectable()
export class LocalStorageService {
    loadState() {
        try {
            const serializedData = localStorage.getItem('state');
            if (serializedData === null) {
                return undefined;
            }
            return fromJS(JSON.parse(serializedData));
        } catch (error) {
            return undefined;
        }
    }

    saveState(state) {
        console.log('Saving state ');
        console.log(state);
        try {
            const serializedData = JSON.stringify(state);
            localStorage.setItem('state', serializedData);
        } catch (error) {
            console.log(error);
        }
    }
}
