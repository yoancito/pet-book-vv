import { TestBed } from '@angular/core/testing';

import { ImageService } from './image.service';

describe('# ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageService]
    })
    service = TestBed.inject(ImageService);
  });

  it('Debe crearse el servicio "ImageService"', () => {
    expect(service).toBeTruthy();
  });

  describe('Obtener Imagenes', () => {
    it('Debe retornar todas las imagenes', () => {
      let allImages = service.getImages();
      expect(allImages.length).toEqual(5);
    });
  });

  describe('Obtener Imagen', () => {
    it('Debe retornar la imagen con id (id 1) y de un perro si existe', () => {
      let imagen = service.getImage(1);
      expect(imagen.brand).toEqual('perro');
    });
    it('Debe retornar la imagen con id (id 2) y de un perro si existe', () => {
      let imagen = service.getImage(2);
      expect(imagen.brand).toEqual('perro');
    });
    it('Debe retornar la imagen con id (id 3) y de un gato si existe', () => {
      let imagen = service.getImage(3);
      expect(imagen.brand).toEqual('gato');
    });
    it('Debe retornar la imagen con id (id 4) y de un gato si existe', () => {
      let imagen = service.getImage(4);
      expect(imagen.brand).toEqual('gato');
    });
    it('Debe retornar indefinido si se busca una imagen con id que NO existe', () => {
      let imagene = service.getImage(100);
      expect(imagene).toEqual(undefined);
    });
  });
});
