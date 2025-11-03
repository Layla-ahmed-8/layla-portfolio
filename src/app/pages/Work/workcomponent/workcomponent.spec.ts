import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workcomponent } from './workcomponent';

describe('Workcomponent', () => {
  let component: Workcomponent;
  let fixture: ComponentFixture<Workcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Workcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Workcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
