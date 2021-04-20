import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPageConfigsComponent } from './all-page-configs.component';

describe('AllPageConfigsComponent', () => {
  let component: AllPageConfigsComponent;
  let fixture: ComponentFixture<AllPageConfigsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPageConfigsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPageConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
