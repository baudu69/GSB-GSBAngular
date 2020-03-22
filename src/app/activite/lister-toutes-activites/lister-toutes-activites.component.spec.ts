import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerToutesActivitesComponent } from './lister-toutes-activites.component';

describe('ListerToutesActivitesComponent', () => {
  let component: ListerToutesActivitesComponent;
  let fixture: ComponentFixture<ListerToutesActivitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerToutesActivitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerToutesActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
