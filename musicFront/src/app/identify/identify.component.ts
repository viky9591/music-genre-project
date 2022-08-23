import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MusicServicesService } from '../music-services.service';
import { DialogService } from '../services/dialog.service';

interface Sample {
  name: string;
  id: number;
}

@Component({
  selector: 'app-identify',
  templateUrl: './identify.component.html',
  styleUrls: ['./identify.component.css'],
})
export class IdentifyComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private dialogServices: DialogService,
    private music:MusicServicesService,
  ) {}
    loader =false;
    resultData:any;
  ngOnInit(): void {
    this.loader =false;
    // this.music.detectService(4)
  }

  audioControl = new FormControl(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  samples: Sample[] = [
    { name: 'Sample one', id: 1 },
    { name: 'Sample two', id: 2 },
    { name: 'Sample three', id: 3 },
    { name: 'Sample four', id: 4 },
    { name: 'Sample five', id: 5 },
  ];

  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  identifyGenre() {
    this.dialogServices
      .confirmDialog({
        title: 'Starting Algorithm',
        message: 'Would you like to start algorrthm to identifi genre?',
        confirmCaption: 'Yes',
        cancelCaption: 'No',
      })
      .subscribe((yes) => {
        if (yes) {
          this.loader=true;  
          console.log('yes');
          // console.log(this.audioControl.value,'dropdown--------------');
            let id=this.audioControl.value
           this.music.detectService(id).subscribe( val => {
            console.log(val,'+++++services+++++')
            this.resultData= val ;

            console.log(this.resultData.data,"hgj");

            this.loader=false;
            this.resultDialog()
          });
        } else {
          console.log('no');
        }
      });


  }
  resultDialog(){

    this.dialogServices
      .confirmDialog({
        title: 'Completed',
        message: `Genre identified was '${this.resultData.data}'`,
        confirmCaption: 'Ok',
        cancelCaption: '',
      })
      .subscribe((yes) => {
        if (yes) {
          location.reload()
        } else {
          console.log('no');
        }
      });


  }
}
