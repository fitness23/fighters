import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    // Manage google maps and geocode api = https://console.cloud.google.com/apis/dashboard?project=connect-event-management
    getFighterDetail(): Observable<any> {
        return this.http.get("/assets/data/data.json", { responseType: 'json', observe: 'response' })
    }


}
