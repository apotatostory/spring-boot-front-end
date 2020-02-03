import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buy00002Component } from './buy00002.component';

describe('Buy00002Component', () => {
  let component: Buy00002Component;
  let fixture: ComponentFixture<Buy00002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buy00002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buy00002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
