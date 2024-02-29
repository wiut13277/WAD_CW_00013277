import { Component } from '@angular/core';
import { Type } from '../../../models/type.model';
import { TypesService } from '../types.service';
import { Router, RouterLink } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-type-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './type-list.component.html',
  styleUrl: './type-list.component.css'
})
export class TypeListComponent {
  types!: Type[];

  constructor(private typeService: TypesService,  private router: Router){}

  ngOnInit(): void{
    this.getTypes();
  }

  getTypes(): void{
    this.typeService.getTypes()
      .subscribe(types => this.types = types);
  }
}
