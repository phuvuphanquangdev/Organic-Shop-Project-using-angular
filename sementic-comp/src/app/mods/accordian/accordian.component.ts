import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {
  @Input() items = [];
  openItemIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  onClick(index: number){
    if(this.openItemIndex === index){
      this.openItemIndex = -1;
    }else{
      this.openItemIndex = index;
    }
  }

}
