import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutcomponent } from './aboutcomponent';

describe('Aboutcomponent', () => {
  let component: Aboutcomponent;
  let fixture: ComponentFixture<Aboutcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
