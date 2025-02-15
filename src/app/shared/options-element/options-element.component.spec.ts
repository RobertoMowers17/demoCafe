import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsElementComponent } from './options-element.component';

describe('OptionsElementComponent', () => {
  let component: OptionsElementComponent;
  let fixture: ComponentFixture<OptionsElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
