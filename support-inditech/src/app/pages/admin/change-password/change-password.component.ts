import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ComplaintsService } from '../../services/complaints.service';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private route: Router, private snack: MatSnackBar, private login: LoginService, private changePassword: ComplaintsService) {
    this.DataFill();
  }
  Cmpassword: any;
  isLoggedIn = false;
  user: any;
  public ChnagePassword = {
    userId: '',
    firstName: '',
    lastName: '',
    password: '',
    newPassword: ''
  };
  ngOnInit(): void {
  }
  DataFill() {
    this.isLoggedIn = this.login.isLoggedIn();
    if (this.isLoggedIn) {
      this.user = this.login.getUser();

      this.ChnagePassword.userId = this.user.userId;
      this.ChnagePassword.firstName = this.user.firstName;
      this.ChnagePassword.lastName = this.user.lastName;

    }
  }
  formSubmit() {
    if (this.ChnagePassword.userId == null) {
      this.snack.open("Login must be required !!", '', { duration: 2500 });
      return;
    }

    if (this.ChnagePassword.password.trim() == '' || this.ChnagePassword.password == null) {
      this.snack.open("Old Password is required !!", '', { duration: 2500 });
      return;
    }
    if (this.ChnagePassword.newPassword.trim() == '' || this.ChnagePassword.newPassword == null) {
      this.snack.open("New Password is required !!", '', { duration: 2500 });
      return;
    }
    if (this.Cmpassword.trim() == '' || this.Cmpassword == null) {
      this.snack.open("Confirm Password is required !!", '', { duration: 2500 });
      return;
    }
    if (this.Cmpassword.trim() != this.ChnagePassword.newPassword) {
      this.snack.open("Password and confirm password does not match!!", '', { duration: 2500 });
      return;
    }

    this.setChangePassword();
  }

  setChangePassword() {
    this.changePassword.updateChangePassword(this.ChnagePassword).subscribe(
      (data: any) => {

        if (data.response == "Password has changed successfully") {
          Swal.fire('Password has changed successfully', '', 'success');
        } else {
          Swal.fire('Password did not match', '', 'error');
        }


      },
      (error) => {
        console.log(error);
      }

    )
  }

}
