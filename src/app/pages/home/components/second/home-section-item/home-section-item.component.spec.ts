import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionItemComponent } from './home-section-item.component';

describe('HomeSectionItemComponent', () => {
  let component: HomeSectionItemComponent;
  let fixture: ComponentFixture<HomeSectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSectionItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
