import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityEditComponent } from './priority-edit.component';

describe('PriorityEditComponent', () => {
  let component: PriorityEditComponent;
  let fixture: ComponentFixture<PriorityEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriorityEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriorityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
