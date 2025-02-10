import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHomeContentComponent } from './new-home-content.component';

describe('NewHomeContainerComponent', () => {
  let component: NewHomeContentComponent;
  let fixture: ComponentFixture<NewHomeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewHomeContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHomeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
