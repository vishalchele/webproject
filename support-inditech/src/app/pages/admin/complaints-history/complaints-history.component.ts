import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintsService } from '../../services/complaints.service';

@Component({
  selector: 'app-complaints-history',
  templateUrl: './complaints-history.component.html',
  styleUrls: ['./complaints-history.component.scss']
})
export class ComplaintsHistoryComponent implements OnInit {
  complaintsDetailsData: any;
  statusCheckOfComplaintID: any;
  countForPendingCalls = 0;
  constructor(private complaintsData: ComplaintsService, private route: Router, private _route: ActivatedRoute) {
    this.statusCheckOfComplaintID = this._route.snapshot.params.complaintID;
    this.getComplaintsDetails();
  }


  ngOnInit(): void {
  }
  getComplaintsDetails() {

    this.complaintsData.getComplaintsHistory(this.statusCheckOfComplaintID).subscribe(
      (data: any) => {
        this.complaintsDetailsData = data.response;
        this.complaintsDetailsData = Array.of(this.complaintsDetailsData);

        for (let dashboardData of this.complaintsDetailsData) {

          if (dashboardData.complaintStatusString == 'Pending') {
            this.countForPendingCalls++;

          }

        }


      },
      (error: any) => {
        console.log(error);
      }

    )
  }

}
