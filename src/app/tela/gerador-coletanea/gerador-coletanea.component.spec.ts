import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradorColetaneaComponent } from './gerador-coletanea.component';

describe('GeradorColetaneaComponent', () => {
  let component: GeradorColetaneaComponent;
  let fixture: ComponentFixture<GeradorColetaneaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeradorColetaneaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeradorColetaneaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
