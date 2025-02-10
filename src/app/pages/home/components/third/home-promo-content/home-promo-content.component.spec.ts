import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePromoContentComponent } from './home-promo-content.component';

describe('HomePromoContentComponent', () => {
  let component: HomePromoContentComponent;
  let fixture: ComponentFixture<HomePromoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePromoContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePromoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
