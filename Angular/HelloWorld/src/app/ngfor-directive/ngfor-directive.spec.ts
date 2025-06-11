import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforDirective } from './ngfor-directive';

describe('NgforDirective', () => {
  let component: NgforDirective;
  let fixture: ComponentFixture<NgforDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgforDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgforDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
