import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AlertModule} from 'ng2-bootstrap';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { ImageServiceComponent } from './image/image-service/image-service.component';
import {ImageFilterPipe} from './image/image-service/filterPipe';
import { ImageDetailComponent } from './image/image-detail-component/image-detail-component.component';
import {appRoutes} from '../route';
import { RouterModule } from '../../node_modules/@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageComponent,
    ImageServiceComponent,
    ImageFilterPipe,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [ImageServiceComponent, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
