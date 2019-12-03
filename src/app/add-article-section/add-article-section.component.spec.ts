import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticleSectionComponent } from './add-article-section.component';

describe('AddArticleSectionComponent', () => {
  let component: AddArticleSectionComponent;
  let fixture: ComponentFixture<AddArticleSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddArticleSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArticleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
