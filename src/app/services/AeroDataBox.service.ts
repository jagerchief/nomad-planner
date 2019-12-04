import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AeroDataBoxService {

    constructor(
        private http: HttpClient) {
    }

    getFlightInfo(flightNum: string, date: string) {
        return this.http.get('https://aerodatabox.p.rapidapi.com/flights/'+flightNum+'/'+date,
            {
                headers: new HttpHeaders()
                    .append('x-rapidapi-host', 'aerodatabox.p.rapidapi.com')
                    .append('x-rapidapi-key', 'CgClO7TgEWmshOKB01UnOAB5Z3ayp1LjwvMjsnOL1qpRmto1km')
        });
    }

}
