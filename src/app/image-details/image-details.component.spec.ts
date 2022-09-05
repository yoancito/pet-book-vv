import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ImageDetailComponent } from './image-details.component';
import { ImageService } from '../image.service';

describe('# ImageDetailsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        ImageDetailComponent
      ],
      providers: [ImageService]
    }).compileComponents();
  }));

  it('Debe crearse el componente', () => {
    const fixture = TestBed.createComponent(ImageDetailComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
