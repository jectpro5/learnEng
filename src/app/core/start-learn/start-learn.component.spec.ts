import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartLearnComponent } from './start-learn.component';

describe('StartLearnComponent', () => {
  let component: StartLearnComponent;
  let fixture: ComponentFixture<StartLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
