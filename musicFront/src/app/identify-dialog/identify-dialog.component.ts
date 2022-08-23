import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

interface ConfirmDialogData {
  title: string;
  message: string;
  confirmCaption: string;
  cancelCaption: string;
}
@Component({
  selector: 'app-identify-dialog',
  templateUrl: './identify-dialog.component.html',
  styleUrls: ['./identify-dialog.component.css']
})
export class IdentifyDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) {}

  ngOnInit(): void {
  }

}
