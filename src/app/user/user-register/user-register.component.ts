import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
registrationForm:FormGroup;
user:User;
userSubmitted:boolean;
  constructor(private fb:FormBuilder,private userService:UserService,private al:AlertifyService) { }

  ngOnInit() {
    // this.registrationForm=new FormGroup(
    //   {
    //     userName: new FormControl(null,Validators.required),
    //     email:new FormControl(null,[Validators.required,Validators.email]),
    //     password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //     confirmPassword:new FormControl(null,Validators.required),
    //     mobile:new FormControl(null,[Validators.required,Validators.maxLength(10)])
    //   },
    //     this.passwordMatchingValidator

    //   )
    this.createRegistrationForm();
  }

      createRegistrationForm(){
        this.registrationForm=this.fb.group({
          userName: [null,Validators.required],
          email:[null,[Validators.required,Validators.email]],
          password:[null,[Validators.required,Validators.minLength(8)]],
          confirmPassword:[null,Validators.required],
          mobile:[null,[Validators.required,Validators.maxLength(10)]]
        },
         {validators:this.passwordMatchingValidator }
        )

      }

      passwordMatchingValidator(fg:AbstractControl):Validators{
        return fg.get('password')?.value===fg.get('confirmPassword')?.value?null:
        {notmatched:true}
      }




get userName(){
  return this.registrationForm.get('userName') as FormControl;
}
get email(){
  return this.registrationForm.get('email') as FormControl;
}
get password(){
  return this.registrationForm.get('password') as FormControl;
}
get confirmPassword(){
  return this.registrationForm.get('confirmPassword') as FormControl;
}
get mobile(){
  return this.registrationForm.get('mobile') as FormControl;
}

userData():User{
  return this.user={
    userName:this.userName.value,
    email:this.email.value,
    password:this.password.value,
    mobile:this.mobile.value
  }

  }


  onSubmit(){
    console.log(this.registrationForm.value);
    this.userSubmitted=true;
    if(this.registrationForm.valid){


      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted=false;
     this.al.success("Congrats, you are registered")
    }
    else{
      this.al.error("Error occured")
    }

  }


}
