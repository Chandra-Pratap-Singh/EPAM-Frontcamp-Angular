import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceListDropdownComponent } from './source-list-dropdown.component';

describe('SourceListDropdownComponent', () => {
  let component: SourceListDropdownComponent;
  let fixture: ComponentFixture<SourceListDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceListDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceListDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
