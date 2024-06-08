import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymsesionComponent } from './gymsesion.component';

describe('GymsesionComponent', () => {
  let component: GymsesionComponent;
  let fixture: ComponentFixture<GymsesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymsesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymsesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
