import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInfo } from './info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private _url:string = " https://api.thecatapi.com/v1/categories";

  constructor(private http:HttpClient) { }

  getInfo(): Observable<IInfo[]>{
    return this.http.get<IInfo[]>(this._url);
  }
}
