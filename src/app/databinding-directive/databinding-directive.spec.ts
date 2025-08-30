import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingDirective } from './databinding-directive';

describe('DatabindingDirective', () => {
  let component: DatabindingDirective;
  let fixture: ComponentFixture<DatabindingDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabindingDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabindingDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
