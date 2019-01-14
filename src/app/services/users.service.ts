import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Users } from '../interfaces/users.interface';
import { User } from '../interfaces/user.interface';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  usersUrl:string= 'https://reqres.in/api/users?page=1.json';
  userUrl:string= 'https://reqres.in/api/users'

  constructor( private http:Http) { }

  getUsers(){
    return this.http.get(this.usersUrl)
    .map(res=>res.json())
  }

  getUser(id){
    let url = `${this.userUrl}/${id}`
    return this.http.get(url)
    .map(res=>res.json())
  }

  saveUser(user:User){
    let body =JSON.stringify(user);
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    return this.http.post(this.userUrl, body, {headers})
    .map( res=>{
      console.log(res.json())
      return res.json()
    });
  }

  updateUser(users:Users, id:string){
    let body =JSON.stringify(users);
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let url = `${this.userUrl}/${id}.json`

    return this.http.put(url, body, {headers})
    .map( res=>{
      console.log(res.json())
      return res.json()
    });
  }

  deleteUser(id:string){
    let url = `${this.userUrl}/${id}.json`
    
    return this.http.delete(this.userUrl)
    .map( res=>{
      console.log(res.json())
      return res.json()
    });
  }

}
