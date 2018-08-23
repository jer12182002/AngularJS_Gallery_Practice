import { Component, OnChanges, Input } from '@angular/core';
import {ImageServiceComponent} from '../image/image-service/image-service.component';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
  title = 'Recent Photos';
  images:any[];
  filterBy ?: string = 'all';  // default load "all"
  visibleImages: any[] = [];
 

  constructor(private imageServiceComponent: ImageServiceComponent) {
    this.visibleImages = this.imageServiceComponent.getImages();
    console.log(this.filterBy);
    console.log("@@@"+this.images);
  }

  ngOnChanges() {
    this.visibleImages = this.imageServiceComponent.getImages();
  }



}
