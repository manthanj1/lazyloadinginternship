import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoader2Component } from './lazy-loader2.component';

describe('LazyLoader2Component', () => {
  let component: LazyLoader2Component;
  let fixture: ComponentFixture<LazyLoader2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyLoader2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LazyLoader2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
