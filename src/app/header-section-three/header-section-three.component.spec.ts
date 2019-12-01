import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderSectionThreeComponent } from "./header-section-three.component";

describe("HeaderSectionThreeComponent", () => {
  let component: HeaderSectionThreeComponent;
  let fixture: ComponentFixture<HeaderSectionThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderSectionThreeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSectionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
