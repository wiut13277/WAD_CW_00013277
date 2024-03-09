import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityCreateComponent } from './priority-create.component';

describe('PriorityCreateComponent', () => {
  let component: PriorityCreateComponent;
  let fixture: ComponentFixture<PriorityCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriorityCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriorityCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
