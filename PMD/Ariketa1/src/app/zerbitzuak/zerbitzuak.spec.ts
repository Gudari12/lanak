import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zerbitzuak } from './zerbitzuak';

describe('Zerbitzuak', () => {
  let component: Zerbitzuak;
  let fixture: ComponentFixture<Zerbitzuak>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zerbitzuak]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zerbitzuak);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
