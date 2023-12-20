import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { endianness } from 'os';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }


  register(user: User){
   return this.http.post("http://localhost:8081/data/add",user,{responseType: 'text'});
  }

  update(user: User): Observable<any>{
    return this.http.put("http://localhost:8081/data/update",user);
  }

  edit(userId:number): Observable<any> {
    const params = new HttpParams()
    .set("id", userId);
   return this.http.get<any>("http://localhost:8081/data/get", {params});
  }

  showData(){
    return this.http.get("http://localhost:8081/data/getAll",{responseType: 'text'});
  }

   
  delete(userId: number): Observable<any>{
    const params = new HttpParams()
    .set("id", userId)
    return this.http.delete("http://localhost:8081/data/delete",{params});
  }

}
