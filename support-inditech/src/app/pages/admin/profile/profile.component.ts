import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private login: LoginService, private route: Router) { }

  ngOnInit(): void {
    this.user = this.login.getUser();
  }
  public onButtonClick(evt: MouseEvent) {
    this.route.navigate(['/admin/change-password']);
  }
}
