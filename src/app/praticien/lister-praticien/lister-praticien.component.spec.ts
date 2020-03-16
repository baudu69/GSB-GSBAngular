import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerPraticienComponent } from './lister-praticien.component';

describe('ListerPraticienComponent', () => {
  let component: ListerPraticienComponent;
  let fixture: ComponentFixture<ListerPraticienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerPraticienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerPraticienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
