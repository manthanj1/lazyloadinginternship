import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoader3Component } from './lazy-loader3.component';

describe('LazyLoader3Component', () => {
  let component: LazyLoader3Component;
  let fixture: ComponentFixture<LazyLoader3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyLoader3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LazyLoader3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
