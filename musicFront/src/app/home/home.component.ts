import { Component, OnInit , ViewChild  } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { animate, query,stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
  trigger('photosAnimation',[
    transition ('* => *',[
      query('img',style({transform:'translateX(-100%)'})),
      query('img',
        stagger('600ms',[
          animate('900ms', style({ transform:'translateX(0)'}))
        ]))
    ])
  ])
  ]
})
export class HomeComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  constructor() { }

  photo ="https://material.angular.io/assets/img/examples/shiba2.jpg";
  shouldRun=true;
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




}
