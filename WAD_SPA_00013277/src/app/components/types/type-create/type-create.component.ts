import { Component } from '@angular/core';
import { Type } from '../../../models/type.model';
import { TypesService } from '../types.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-type-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './type-create.component.html',
  styleUrl: './type-create.component.css'
})
export class TypeCreateComponent {
  type: Type = {
    id: 0,
    name: ''
  };
  constructor(private typeService: TypesService, private router: Router){}

  createType(type: Type){
    this.typeService.addType(type)
      .subscribe(
        response => {
          this.router.navigate(['/types']);
        }
      );
  }
}
