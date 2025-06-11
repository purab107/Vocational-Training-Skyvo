import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesAngular } from './pipes-angular';

describe('PipesAngular', () => {
  let component: PipesAngular;
  let fixture: ComponentFixture<PipesAngular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesAngular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesAngular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
