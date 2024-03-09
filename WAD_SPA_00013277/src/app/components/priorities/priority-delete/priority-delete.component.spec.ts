import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityDeleteComponent } from './priority-delete.component';

describe('PriorityDeleteComponent', () => {
  let component: PriorityDeleteComponent;
  let fixture: ComponentFixture<PriorityDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriorityDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriorityDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
