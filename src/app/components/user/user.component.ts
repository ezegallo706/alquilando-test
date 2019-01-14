import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { Users } from '../../interfaces/users.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = {
    name: "",
    job: ""
  }
 
  users: Users = {
    first_name: "",
    last_name: "",
    avatar: ""
  }

  nuevo:boolean = false;
  id:string;

  constructor(private _UsersService:UsersService, 
    private router:Router,
    private activatedRoute:ActivatedRoute,
   ) { 

      this.activatedRoute.params
      .subscribe(parametros=>{
        console.log(parametros)
        this.id = parametros['id']
        if(this.id !== "nuevo"){
          this._UsersService.getUser(this.id)
            .subscribe( respuesta => {
              this.users = respuesta.data})
          }
      });
    }

  ngOnInit() {
    if(this.id=="nuevo"){
      this.nuevo=true
    } else {
      this.nuevo=false;
    }    
  }

  guardarCambios(){

    if(this.id == "nuevo"){
      //insertando

      this._UsersService.saveUser(this.user)
      .subscribe(data =>{
        this.router.navigate(['/users'])
      });
    
    } else {
      //actualizando

      this._UsersService.updateUser(this.users, this.id)
      .subscribe(data =>{
        this.router.navigate(['/users'])
      })
    }
   
  }

  
}
