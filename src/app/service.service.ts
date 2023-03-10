import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private URL: string = "http://localhost:3000/persona/api"

  constructor(private http:HttpClient) { }
  listarPersonas(){
    return this.http.get(this.URL + "/all");
  }
}
