import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { ComplaintsService } from '../../services/complaints.service';

@Component({
  selector: 'app-manage-technicions',
  templateUrl: './manage-technicions.component.html',
  styleUrls: ['./manage-technicions.component.scss']
})
export class ManageTechnicionsComponent implements OnInit {
  complaintsDetailsData: any;
  countOfCallsAssigne: any;
  transferComplanttechList: any;
  campareUserId: any;
  TransferTechnicianId: any;
  select: any;
  constructor(private complaintsData: ComplaintsService, private snack: MatSnackBar) { this.getTechnicianList(); }

  public complaintDetails = {
    userId: ''
  };

  public complaintTechMapDtls = {
    complaintStatus: '',
    assignedFor: ''
  };


  ngOnInit(): void {
    this.getTechnicianList();
  }

  formSubmit() {

    if (this.campareUserId == null) {

      this.snack.open("Please select technician list !!", '', { duration: 2000 });
      return;
    }


    this.blockTechnician();
  }

  BlockId(value: any) {
    this.countOfCallsAssigne = value.countOfCallsAssigned;
    this.campareUserId = value.userId;
    this.complaintTechMapDtls.assignedFor = value.userId;
    this.complaintDetails.userId = value.userId;

    this.getTransferTechnicianList();
  }

  TransferId(transferId: any) {

    this.complaintTechMapDtls.complaintStatus = transferId.userId;

  }
  blockTechnician() {
    if (this.countOfCallsAssigne != 0) {
      this.complaintsData.TransferTechnicianTo(this.complaintTechMapDtls).subscribe(
        (data: any) => {

        },
        (error) => {
          console.log(error);
        }
      )
    }

    this.complaintsData.blockTechnicianId(this.complaintDetails).subscribe(
      (data: any) => {
        Swal.fire('Technician Successfully Blocked', '', 'success');

      },
      (error) => {
        console.log(error);
      }

    )
  }

  getTransferTechnicianList() {
    this.complaintsData.getTransferTechnicianList(this.complaintDetails).subscribe(
      (data: any) => {
        this.transferComplanttechList = data.response;

      },
      (error) => {
        console.log(error);
      }

    )
  }

  getTechnicianList() {
    this.complaintsData.getTechnicianList().subscribe(
      (data: any) => {
        this.complaintsDetailsData = data.response;

      },
      (error) => {
        console.log(error);
      }

    )
  }
}
