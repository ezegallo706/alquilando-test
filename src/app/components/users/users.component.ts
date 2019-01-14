import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any[]=[];

  constructor(private _UsersService:UsersService) { 

  this._UsersService.getUsers()
    .subscribe(res=>{
      // console.log(res.data)
      this.users = res.data;
    });
}

  ngOnInit() {
  }

  borrarUsuario(id:string){
    console.log(id)
    this._UsersService.deleteUser(id)
    .subscribe(respuesta=>{
      if(respuesta){
        console.log(respuesta)
      } else {
        //todo bien
        delete this.users[id];
      }
    });
  }

}
