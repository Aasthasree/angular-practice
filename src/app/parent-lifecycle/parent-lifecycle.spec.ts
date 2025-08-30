import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLifecycle } from './parent-lifecycle';

describe('ParentLifecycle', () => {
  let component: ParentLifecycle;
  let fixture: ComponentFixture<ParentLifecycle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentLifecycle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentLifecycle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
