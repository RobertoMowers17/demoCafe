import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProjectElementComponent } from './home-project-element.component';

describe('HomeProjectElementComponent', () => {
  let component: HomeProjectElementComponent;
  let fixture: ComponentFixture<HomeProjectElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProjectElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProjectElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
