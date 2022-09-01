import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }



public getUserDetails(usernamePassword:any){
  return this.http.post(`${baseUrl}/api/user/validateUserByUserNameAndPassword`,usernamePassword);

}

public getPincodeAvailability(pincode:any){
  return this.http.post(`${baseUrl}`,pincode);

}

public loginUser(userLoginData:any)
{
 // console.log(userLoginData);
  localStorage.setItem('userLoginData',JSON.stringify(userLoginData));

  return true;
}

public getUser(){
  let userStr=localStorage.getItem('userLoginData');
  // console.log(userStr);
  // console.log(localStorage.getItem('userLoginData'));
  if(userStr !=null){

    return JSON.parse(userStr);
  }else{
    this.logOut();
    return null;
  }
}
public logOut(){
  localStorage.removeItem("userLoginData");
  return true;

}

public isLoggedIn(){
  let userStr=localStorage.getItem("userLoginData");
  if(userStr==undefined || userStr =='' || userStr==null){
    return false;
  }else{
    return true;
  }
}
public getUserRole(){
  let user=this.getUser()
  // console.log(user);
  return user.userRoleName;
}

}
