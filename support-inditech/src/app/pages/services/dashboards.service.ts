import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class DashboardsService {

  constructor(private http:HttpClient) { }

  public getDashboardData(){
    return this.http.get(`${baseUrl}/api/dashboard/getAllCountsForDashboardForCoordinator`);
  }
  public getPendingAllCounts(){
    return this.http.get(`${baseUrl}/api/dashboard/getAllPendingCallsCountsForCoordinator`);
  }
}
