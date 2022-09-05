import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GalleryComponent } from './image-gallery.component';
import { ImageService } from '../image.service';
import { FilterimagesPipe } from '../filterimages.pipe';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
 
describe('# ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        
      ],
      declarations: [ 
        GalleryComponent,
        FilterimagesPipe
      ],
      providers: [ImageService,FilterimagesPipe],
    }).compileComponents();
  }));

  it('Debe crearse el componente', () => {
    const fixture = TestBed.createComponent(GalleryComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /*it('Debe filtrar todas las mascotas al presionar el boton "all"', () => {
    let btnAll = fixture.debugElement.nativeElement.queryAll(By.css('#all'));
    btnAll.click();
    fixture.detectChanges();
    let imagenes = fixture.debugElement.queryAll(By.css('.img'));
    expect(imagenes.length).toEqual(5)
  });*/
});

