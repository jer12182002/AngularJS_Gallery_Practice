import { Component, OnInit } from '@angular/core';
import {ImageServiceComponent} from '../image-service/image-service.component';
import {ActivatedRoute}from'@angular/router';
import { ImageComponent } from '../image.component';
@Component({
  selector: 'app-image-detail-component',
  templateUrl: './image-detail-component.component.html',
  styleUrls: ['./image-detail-component.component.css']
})
export class ImageDetailComponent implements OnInit {
  image:any
  constructor(private imageService:ImageServiceComponent,private route:ActivatedRoute) { }
 
  ngOnInit() {
    this.image=this.imageService.getImage(
      +this.route.snapshot.params['id'])
    
  }

}
