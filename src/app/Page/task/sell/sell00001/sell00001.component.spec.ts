import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sell00001Component } from './sell00001.component';

describe('Sell00001Component', () => {
  let component: Sell00001Component;
  let fixture: ComponentFixture<Sell00001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sell00001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sell00001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
