import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingTemplatesComponent } from './existing-templates.component';

describe('ExistingTemplatesComponent', () => {
  let component: ExistingTemplatesComponent;
  let fixture: ComponentFixture<ExistingTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
