import { Component, OnInit } from '@angular/core';
import { MusicServicesService } from '../music-services.service';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  constructor( private dialogServices: DialogService ,private music:MusicServicesService) { }

  loader=false;
  resultData:any;

  ngOnInit(): void {
  }

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

  trainAlgorithm() {
    this.dialogServices
      .confirmDialog({
        title: 'Starting Algorithm',
        message: 'Would you like to start algorrthm to train this may take several minutes?',
        confirmCaption: 'Yes',
        cancelCaption: 'No',
      })
      .subscribe((yes) => {
        if (yes) {
          this.loader=true;
          console.log('yes clicked');
          this.music.trainService().subscribe( data => {
            this.resultData=data
            console.log(this.resultData.data,'train result***************')
            this.loader=false;
            this.resultDialog()
          }
          )
        } else {
          console.log('no');
        }
      });


  }

  resultDialog(){

    this.dialogServices
      .confirmDialog({
        title: 'Completed',
        message: `algorithm completly trained '${this.resultData.data}'`,
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
