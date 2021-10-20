import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInfo } from './info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private _url:string = "https://sq009portfolio.herokuapp.com/api/v1/Portfolio";

  constructor(private http:HttpClient) { }

  getInfo(){
    // let params = new HttpParams().set('apiKey', '8dc89438-882c-4838-8217-f96c60ab20e9');
    let header = new HttpHeaders({"apiKey":"8dc89438-882c-4838-8217-f96c60ab20e9"});

    return this.http.get(this._url, { headers:header });
  }
}
