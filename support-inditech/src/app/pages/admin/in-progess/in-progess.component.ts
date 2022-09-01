import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintsService } from '../../services/complaints.service';

@Component({
  selector: 'app-in-progess',
  templateUrl: './in-progess.component.html',
  styleUrls: ['./in-progess.component.scss']
})
export class InProgessComponent implements OnInit {
  complaintsDetailsData: any;
  PendingCount = 0;
  constructor(private complaintsData: ComplaintsService, private route: Router) { this.getComplaintsDetails(); }
  public complaintDetails = {
    complaintId: 1
  };


  ngOnInit(): void {
  }
  getComplaintsDetails() {
    this.complaintsData.getComplaintsData(this.complaintDetails).subscribe(
      (data: any) => {
        this.complaintsDetailsData = data.response;
        for (let entry of data.response) {
          if (entry.status == "Inprogress for visit") {
            this.PendingCount++;
            // console.log(this.PendingCount);
          }
        }


      },
      (error: any) => {
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
