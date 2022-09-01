import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUserData: any;
  public userDetailsData = {
    userName: '',
    password: '',
  };



  constructor(private snack: MatSnackBar, private login: LoginService, private router: Router) { }

  ngOnInit(): void {
  }



  formSubmit() {

    if (this.userDetailsData.userName.trim() == '' || this.userDetailsData.userName == null) {

      this.snack.open("Username is required !!", '', { duration: 2500 });
      return;
    }

    if (this.userDetailsData.password.trim() == '' || this.userDetailsData.password == null) {

      this.snack.open("Password is required !!", '', { duration: 2500 });
      return;
    }

    this.login.getUserDetails(this.userDetailsData).subscribe(
      (data: any) => {
        // console.log("vishal");
        // console.log(data.response);
        this.loginUserData = data.response;
        this.login.loginUser(this.loginUserData);

        if (data.response.userRoleName == 'Admin') {
          this.router.navigate(['admin']);
        } else {
          this.snack.open("Invalid Credentials !! Try again", '', { duration: 2500 });
          this.login.logOut();
        }

      },
      (error) => {

        this.snack.open("Invalid Credentials !! Try again", '', { duration: 2500 });
      }
    );

  }



}
