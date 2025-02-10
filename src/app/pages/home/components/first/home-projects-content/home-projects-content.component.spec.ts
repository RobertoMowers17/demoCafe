import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProjectsContentComponent } from './home-projects-content.component';

describe('HomeProjectsContentComponent', () => {
  let component: HomeProjectsContentComponent;
  let fixture: ComponentFixture<HomeProjectsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProjectsContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProjectsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
