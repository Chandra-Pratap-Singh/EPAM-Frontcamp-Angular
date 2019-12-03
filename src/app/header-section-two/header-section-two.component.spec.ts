import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSectionTwoComponent } from './header-section-two.component';

describe('HeaderSectionTwoComponent', () => {
  let component: HeaderSectionTwoComponent;
  let fixture: ComponentFixture<HeaderSectionTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSectionTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
