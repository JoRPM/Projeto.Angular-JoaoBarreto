import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dicionario } from './dicionario.model';

//Provedor de recursos HTTP
const httpOptions = { 
    headers: new HttpHeaders({'Content-Type' : 'application/json;charset=utf-8'})
};
@Injectable({ providedIn: 'root'})
export class DicionarioService {

    
    //injeção de dependencia
    constructor(private http:HttpClient) {}

    listaDicionario(){
        return this.http.get<Dicionario[]>(`http://localhost:3000/dicionario`, httpOptions);      
    }
}