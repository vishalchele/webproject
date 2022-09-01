import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {

  constructor(private http:HttpClient) { }
  public getComplaintsData(complaintId:any){
    return this.http.post(`${baseUrl}/api/coordinator/getAllComplaintsByStatus`,complaintId);
  }

  public getData(complaintId:any){
    return this.http.post(`${baseUrl}`,complaintId);
  }

  public getComplaintsHistory(compltId:any){
    // console.log(compltId);
    return this.http.get(`${baseUrl}/api/coordinator/getHistoryOfComplaint`,{ params: {complaintId: compltId}});
  }

  public getTechnicianList(){
    return this.http.get(`${baseUrl}/api/coordinator/getAllTechniciansAvailable`);
  }
  public getTransferTechnicianList(userId:any){
    // console.log(userId);
    return this.http.post(`${baseUrl}/api/coordinator/getAllTechniciansTransferAvailable`,userId);
  }

  public blockTechnicianId(technicianId:any){
    return this.http.post(`${baseUrl}/api/user/block-user`,technicianId);
  }

  public TransferTechnicianTo(complaintTechMapDtls:any){
    return this.http.post(`${baseUrl}/api/coordinator/updateComplaintTechMapDtls`,complaintTechMapDtls);
  }

  public updateChangePassword(ChangePassword:any){
    return this.http.post(`${baseUrl}/api/user/changePasswordByUserId`,ChangePassword);
  }

  public getPendingCallsFromthree(){
    return this.http.get(`${baseUrl}/api/dashboard/getPendingCallsDetailsForThreeDays`);
  }
  public getPendingCallsFromOne(){
    return this.http.get(`${baseUrl}/api/dashboard/getPendingCallsDetailsForOneWeek`);
  }
  public getPendingCallsFromTwo(){
    return this.http.get(`${baseUrl}/api/dashboard/getPendingCallsDetailsForTwoWeeks`);
  }
  public getPendingCallsFromThreeW(){
    return this.http.get(`${baseUrl}/api/dashboard/getPendingCallsDetailsForThreeWeeks`);
  }

  public getPendingCallsFromMonth(){
    return this.http.get(`${baseUrl}/api/dashboard/getPendingCallsDetailsForMoreThanWeeks`);
  }

  public getCompailantPhotosByComplaintId(complaintId:any){
    console.log(complaintId);
    return this.http.post(`${baseUrl}/api/coordinator/getAllPhotosByComplaintId`,complaintId);
  }
  public getMaterialPhotosByComplaintId(complaintId:any){
    console.log(complaintId);
    return this.http.post(`${baseUrl}/api/material/getMaterialPhotosByComplaintId`,complaintId);
  }

}
