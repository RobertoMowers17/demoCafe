import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImagesCarrouselComponent } from './product-images-carrousel.component';

describe('ProductImagesCarrouselComponent', () => {
  let component: ProductImagesCarrouselComponent;
  let fixture: ComponentFixture<ProductImagesCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductImagesCarrouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductImagesCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
