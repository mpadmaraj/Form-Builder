import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPagesComponent } from './preview-pages.component';

describe('PreviewPagesComponent', () => {
  let component: PreviewPagesComponent;
  let fixture: ComponentFixture<PreviewPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
