import {Injectable} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../../environments/environments";

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    apiURL: string = environment.apiUrl;
    ckanURL: string = environment.ckanURL;
    clientID: string = environment.clientId;
    clientSecret: string = environment.clientSecret;

    constructor() {
    }

    setHeaders() {
        return new HttpHeaders({
            'Authorization': 'Basic ' + btoa(`${this.clientID}:${this.clientSecret}`),
            'Content-Type': 'application/json'
        });
    }
}
