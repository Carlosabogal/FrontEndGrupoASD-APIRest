import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarActivosComponent } from './registrar-activos.component';

describe('RegistrarActivosComponent', () => {
  let component: RegistrarActivosComponent;
  let fixture: ComponentFixture<RegistrarActivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarActivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
