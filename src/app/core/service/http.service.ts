import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string=environment.baseUrl;

  httpHeaders:HttpHeaders = new HttpHeaders()
                            .set("content-type","application/json");

  constructor(private http:HttpClient) { }

  getDataFromServer(endPoint:string){
    const Url=this.baseUrl+endPoint;
    return this.http.get(Url,{headers:this.httpHeaders});

  }

  getDataFromServerByUsingQueryParams(endPoint:string){
    const Url=this.baseUrl+endPoint;
    return this.http.get(Url,{headers:this.httpHeaders});

  }
}
