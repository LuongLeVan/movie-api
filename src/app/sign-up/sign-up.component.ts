import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  @ViewChild('fileInput') fileInput!: ElementRef;

  isShow:boolean = false;
  isShowRePass:boolean = false;
  usernamePattern = /^[a-z]{6,32}$/i;
  passwordPattern = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;
  rePasswordPattern = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;
  newUser:any = {
    userName: '',
    password: '',
    imageUrl: ''
  }

   userName:string = '';
   password:any = '';
   imageUrl: any;
   avatar: any;
   userArray:any = [];
   results:any  ='';
   userList:any[] =  [];
   retypePassword:string = '' ;
   resultsImage:any = ''
   constructor(){

  }

  ngOnInit(): void {
    fromEvent(this.fileInput.nativeElement, 'change')
      .pipe(
        switchMap(() => {
          const file = this.fileInput.nativeElement.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(file);
          return fromEvent(reader, 'load');
        })
      )
      .subscribe((event: any) => {
        this.avatar = event.target.result;
        this.resultsImage = this.avatar;
      });
  }


  myFunc(){
   /*  const getUser = localStorage.getItem('userName');
    const getPass = localStorage.getItem('password'); */
  }


  onSubmit(signInForm:any){
    console.log('avatar',this.avatar);

    this.newUser = {
      userName: this.userName,
      password: this.password,
      imageUrl: this.resultsImage
    }
    this.results = localStorage.getItem('userList');
    this.userList = this.results ? JSON.parse(this.results) : [];
    
    // Kiểm tra xem phim đã có trong danh sách yêu thích hay chưa
    if (!this.userList.some(user => user.userName === this.userName)) {
      // Thêm phim vào danh sách yêu thích 
      this.userList.push(this.newUser);
      localStorage.setItem('userList', JSON.stringify(this.userList));
    }
  }
    


   
  } 

