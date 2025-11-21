import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Precedentes } from './precedentes';

describe('Precedentes', () => {
  let component: Precedentes;
  let fixture: ComponentFixture<Precedentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Precedentes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Precedentes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
