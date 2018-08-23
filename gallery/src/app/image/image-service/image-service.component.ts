import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-image-service',
  templateUrl: './image-service.component.html',
  styleUrls: ['./image-service.component.css']
})



export class ImageServiceComponent implements OnInit {
  visibleImages = [];
  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }
  getImage(id: number) {
    return IMAGES.slice(0).find(Image => Image.id === id);
  }
  ngOnInit() {
  }

}


const IMAGES = [
  {'id': 1, 'category': 'boats', 'caption': 'View from the boat', 'url': 'assets/img/boat_01.jpeg'},
  {'id': 2, 'category': 'boats', 'caption': 'Sailing the coast', 'url': 'assets/img/boat_02.jpeg'},
  {'id': 3, 'category': 'boats', 'caption': 'The water was nice', 'url': 'assets/img/boat_03.jpeg'},
  {'id': 4, 'category': 'boats', 'caption': 'Cool water cavern', 'url': 'assets/img/boat_04.jpeg'},
  {'id': 5, 'category': 'boats', 'caption': 'Sunset at the docks', 'url': 'assets/img/boat_05.jpeg'},
  {'id': 6, 'category': 'camping', 'caption': 'Camping Trip', 'url': 'assets/img/camping_01.jpeg'},
  {'id': 7, 'category': 'camping', 'caption': 'Kim and Jessie', 'url': 'assets/img/camping_02.jpeg'},
  {'id': 8, 'category': 'camping', 'caption': 'View from the top', 'url': 'assets/img/camping_03.jpeg'},
  {'id': 9, 'category': 'camping', 'caption': 'On the trail', 'url': 'assets/img/camping_04.jpg'},
  {'id': 10, 'category': 'camping', 'caption': 'Our camping spot', 'url': 'assets/img/camping_05.jpeg'},
  {'id': 11, 'category': 'camping', 'caption': 'RV Life', 'url': 'assets/img/camping_06.jpg'}
];
