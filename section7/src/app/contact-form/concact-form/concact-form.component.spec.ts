import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcactFormComponent } from './concact-form.component';

describe('ConcactFormComponent', () => {
  let component: ConcactFormComponent;
  let fixture: ComponentFixture<ConcactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
