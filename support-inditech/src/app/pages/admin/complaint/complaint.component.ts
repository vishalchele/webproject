import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintsService } from '../../services/complaints.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent implements OnInit {
  complaintsDetailsData: any;
  allComplaintDetailsData: any;
  isLoggedIn = false;
  status: any;
  user: any;
  p: number = 1;
  constructor(private complaintsData: ComplaintsService, private route: Router, private login: LoginService) {
    this.getComplaintsDetails();
  }

  public complaintDetails = {
    complaintId: 1
  };

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();

  }

  MatSeachOption1() {

    this.complaintsDetailsData = this.allComplaintDetailsData;

  }
  MatSeachOption() {
    this.complaintsDetailsData = this.allComplaintDetailsData;

  }
  Search() {

    if (this.status == "") {
      this.getComplaintsDetails();
      this.ngOnInit();
    } else {
      this.complaintsDetailsData = this.complaintsDetailsData.filter((res: { status: string; }): any => {



        if (this.status == "All") {
          return res.status;
        }
        return res.status == this.status;
      })
    }
  }




  getComplaintsDetails() {
    this.complaintsData.getComplaintsData(this.complaintDetails).subscribe(
      (data: any) => {
        this.complaintsDetailsData = data.response;
        this.allComplaintDetailsData = data.response;


      },
      (error) => {
        console.log(error);
      }

    )
  }

  public onCardClick(complaintId: Number) {
    // console.log("vishal");
    this.route.navigate(['/admin/history', complaintId]);
  }

  public onComplaintPhoto(complaintId: Number) {
    // this.route.navigate(['/admin/dashboard']);
    this.route.navigate(['/admin/complaintPhotos', complaintId]);
    //  console.log(complaintId);
  }

}
