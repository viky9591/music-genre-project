import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicServicesService {

  constructor( private http:HttpClient) { }
  url ='http://127.0.0.1:5000';

  detectService(data:any){
   return this.http.get(`${this.url}/detect/${data}`);
  }

  trainService(){
    console.log('train services');

    return this.http.get(`${this.url}/train/`);
  }

}
