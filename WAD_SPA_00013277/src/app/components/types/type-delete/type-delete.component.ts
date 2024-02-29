import { Component } from '@angular/core';
import { TypesService } from '../types.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from '../../../models/type.model';

@Component({
  selector: 'app-type-delete',
  standalone: true,
  imports: [],
  templateUrl: './type-delete.component.html',
  styleUrl: './type-delete.component.css'
})
export class TypeDeleteComponent {
  type: Type = {
    id: 0,
    name: ''
  };

  id: number = 0;

  constructor(private route: ActivatedRoute,
    private typeService : TypesService, 
    private router : Router) {}

    ngOnInit(): void {
      const idParam = this.route.snapshot.paramMap.get('id');
      this.id = idParam ? +idParam : 0;    
      this.getType(this.id);
    }

    getType(id: number): void {
      this.typeService.getType(id)
        .subscribe(type => {
          this.type = type
        });
    }
  delete(): void{
    this.typeService.deleteType(this.id)
      .subscribe(
        response => {
            this.router.navigate(['/types']);
        },
        error =>  console.log(error)
      );
  }

  cancel(): void{
    this.router.navigate(['/types']);
  }
}
