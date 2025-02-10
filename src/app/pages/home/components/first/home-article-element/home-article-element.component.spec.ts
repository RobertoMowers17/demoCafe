import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArticleElementComponent } from './home-article-element.component';

describe('HomeArticleElementComponent', () => {
  let component: HomeArticleElementComponent;
  let fixture: ComponentFixture<HomeArticleElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeArticleElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeArticleElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
