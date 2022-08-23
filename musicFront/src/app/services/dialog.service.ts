import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IdentifyDialogComponent } from '../identify-dialog/identify-dialog.component';
// import { DialogComponent } from '../component/home/component/dialog/dialog.component';

interface ConfirmDialogData {
  title: string;
  message: string;
  confirmCaption: string;
  cancelCaption: string;
}
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  confirmDialog(data: ConfirmDialogData): Observable<boolean> {
    return this.dialog
      .open(IdentifyDialogComponent, {
        data,
        width: '400px',
        disableClose: true,
      })
      .afterClosed();
  }
}
