import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-photo',
  templateUrl: './view-photo.component.html',
  styleUrls: ['./view-photo.component.css']
})
export class ViewPhotoComponent {

  constructor(private api:ApiService)
  {
    api.fetchPhotos().subscribe(
      (response)=>
      {
        this.photos=response;
      }
    )
  }

  photos:any=[]

}
