import { Component, OnInit } from '@angular/core';
import { Type } from '../../../models/type.model';
import { TypesService } from '../types.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-type-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './type-edit.component.html',
  styleUrl: './type-edit.component.css'
})
export class TypeEditComponent implements OnInit {
  type: Type = {
    id: 0,
    name: ''
  };
  id = 0;

  constructor(private route: ActivatedRoute, private typeService: TypesService, private router: Router){}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? + idParam : 0;   
  }

  editType(type: Type){
    this.typeService.updateType(this.id, type)
      .subscribe(
        response => {
          this.router.navigate(['/types']);
        }
      );
  }
}
