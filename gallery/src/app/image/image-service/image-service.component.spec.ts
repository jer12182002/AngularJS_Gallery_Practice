import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageServiceComponent } from './image-service.component';

describe('ImageServiceComponent', () => {
  let component: ImageServiceComponent;
  let fixture: ComponentFixture<ImageServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
