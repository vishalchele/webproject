import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private login: LoginService, private _location: Location) { }


  ngOnInit(): void {
  }
  public logout() {
    this.login.logOut();

    window.location.reload();
  }
  public backButton() {
    this._location.back();


  }
}
