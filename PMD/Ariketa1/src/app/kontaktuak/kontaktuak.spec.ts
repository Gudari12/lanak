import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kontaktuak } from './kontaktuak';

describe('Kontaktuak', () => {
  let component: Kontaktuak;
  let fixture: ComponentFixture<Kontaktuak>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kontaktuak]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kontaktuak);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
