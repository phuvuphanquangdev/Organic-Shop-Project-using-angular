import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {
  stats = [
    {value: 22, label: 'Users'},
    {value: 900, label: 'Revenue'},
    {value: 50, label: 'Reviews'}
  ];

  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is a fantastic couch to sit on'
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a great dresser to put staff in'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
