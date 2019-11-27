import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSectionOneComponent } from './header-section-one.component';

describe('HeaderSectionOneComponent', () => {
  let component: HeaderSectionOneComponent;
  let fixture: ComponentFixture<HeaderSectionOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSectionOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
