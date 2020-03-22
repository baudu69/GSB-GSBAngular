import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerActiviteComponent } from './lister-activite.component';

describe('ListerActiviteComponent', () => {
  let component: ListerActiviteComponent;
  let fixture: ComponentFixture<ListerActiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerActiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
