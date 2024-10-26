import { WikipediaService } from './wikipedia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = [];

  constructor(private wikiService: WikipediaService) {}

  onSubmit(term: string){
    this.wikiService.search(term).subscribe((pages) => {
      this.pages = pages;
    });
  }

}
