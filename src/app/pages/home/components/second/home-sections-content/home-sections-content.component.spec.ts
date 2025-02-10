import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionsContentComponent } from './home-sections-content.component';

describe('HomeSectionsContentComponent', () => {
  let component: HomeSectionsContentComponent;
  let fixture: ComponentFixture<HomeSectionsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSectionsContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSectionsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
