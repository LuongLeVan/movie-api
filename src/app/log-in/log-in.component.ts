import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  isShow:boolean = false;
  userName:string = '';
  password:string = '';
  usersJSON:any = [];
  users:any = [];
  user:any = '';

  constructor(private router:Router){

  }

  ngOnInit(): void {
    
    this.usersJSON = localStorage.getItem('userList')    
    this.users = JSON.parse(this.usersJSON)
    console.log(this.users);
    
  }

  onSubmit(){
    this.user = this.users.filter((user:any) => user.userName === this.userName)
    if(this.user){
     if(this.userName === this.user[0].userName && this.password === this.user[0].password){
      alert('Login Success, Site will be  back to Trending Page after five seconds')
      //After 5 seconds the site will be navigate to trending page
      setTimeout(() => {
        this.router.navigateByUrl('/')
      }, 5000);

     }
     
    }
   
    
  }
}
