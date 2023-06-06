import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  urlname = 'http://localhost:3000/getname' ;
  urlpostname = 'http://localhost:3000/postname';
  urlgetalluser = 'http://localhost:3000/getalluser';
  urlreset = 'http://localhost:3000/getreset';

  constructor(private http:HttpClient) { }

  getname_api() {
    return this.http.get(this.urlname ) ;
  }
  postname_api(data: any) {
    return this.http.post(this.urlpostname , data );
  }
  getalluserdata(){
    return this.http.get(this.urlgetalluser);
  }
  resetall() {
    return this.http.get(this.urlreset);
  }
}
