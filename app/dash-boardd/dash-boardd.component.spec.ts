import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoarddComponent } from './dash-boardd.component';

describe('DashBoarddComponent', () => {
  let component: DashBoarddComponent;
  let fixture: ComponentFixture<DashBoarddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoarddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoarddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
