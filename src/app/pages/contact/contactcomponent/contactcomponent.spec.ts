import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactcomponent } from './contactcomponent';

describe('Contactcomponent', () => {
  let component: Contactcomponent;
  let fixture: ComponentFixture<Contactcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contactcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contactcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
