import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintsService } from '../../services/complaints.service';

@Component({
  selector: 'app-total-calls',
  templateUrl: './total-calls.component.html',
  styleUrls: ['./total-calls.component.scss']
})
export class TotalCallsComponent implements OnInit {
  complaintsDetailsData:any;
  statusCheck="Pending";
  allComplaintDetailsData:any;
  status:any;
  p:number=1;
  complaintId:any;
  constructor(private complaintsData:ComplaintsService,private route:Router) { this.getComplaintsDetails();}
  public complaintDetails = {
    complaintId:1
  };

  ngOnInit(): void {
  }

  MatSeachOption1(){
    // console.log("work");
    this.complaintsDetailsData=this.allComplaintDetailsData;

  }
  MatSeachOption(){
    this.complaintsDetailsData=this.allComplaintDetailsData;

  }
  Search(){
    // console.log("vishal");
    if(this.status ==""){
      this.getComplaintsDetails();
      this.ngOnInit();
    }else{
       this.complaintsDetailsData=this.complaintsDetailsData.filter((res: { status: string; }): any =>{

        // console.log(res.status);

        if(this.status=="All"){
          return res.status;
        }
          return res.status==this.status;
       })

      }

    }


  getComplaintsDetails() {
    this.complaintsData.getComplaintsData(this.complaintDetails).subscribe(
      (data:any)=>{
        this.complaintsDetailsData=data.response;
        this.allComplaintDetailsData=data.response;


      },
      (error:any)=>{
        console.log(error);
      }

    )
  }
  public onCardClick(complaintId:Number){
    // console.log("vishal");
    this.route.navigate(['/admin/history',complaintId]);
  }

  public onComplaintPhoto(complaintId:Number){
    // this.route.navigate(['/admin/dashboard']);
    this.route.navigate(['/admin/complaintPhotos',complaintId]);
   //  console.log(complaintId);
   }
   SearchTicket(){
    if(this.complaintId ==""){
      this.getComplaintsDetails();

    }else{
        this.complaintsDetailsData= this.complaintsDetailsData.filter((res: { complaintId: string; }): any =>{
          return res.complaintId==this.complaintId;
       })
    }
    }
}
