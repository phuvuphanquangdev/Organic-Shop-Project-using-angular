import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submitter = new EventEmitter<string>();
  term = '';

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(event: any){
    // To prevent default submit behabhor of form....
    event.preventDefault();
    this.submitter.emit(this.term);
  }

}
