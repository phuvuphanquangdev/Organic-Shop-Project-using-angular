import { PhotoService } from './../photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  photoUrl = '';
  description = '';
  
  constructor(private photoService: PhotoService) {
    this.getPhoto();
  }
  
  getPhoto(){
    this.photoService.getRandomPhoto().subscribe((response) => {
      // console.log(response);
      this.photoUrl = response.urls.small;
      this.description = response.alt_description;
    });
  }

  ngOnInit() {
  }

}
