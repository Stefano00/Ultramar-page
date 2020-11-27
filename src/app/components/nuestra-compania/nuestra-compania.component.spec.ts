import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestraCompaniaComponent } from './nuestra-compania.component';

describe('NuestraCompaniaComponent', () => {
  let component: NuestraCompaniaComponent;
  let fixture: ComponentFixture<NuestraCompaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestraCompaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestraCompaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
