import { Routes } from '@angular/router';
import { TypeListComponent } from './components/types/type-list/type-list.component';
import { TypeCreateComponent } from './components/types/type-create/type-create.component';
import { TypeEditComponent } from './components/types/type-edit/type-edit.component';
import { TypeDeleteComponent } from './components/types/type-delete/type-delete.component';

export const routes: Routes = [
    { path: 'types', component: TypeListComponent },
    { path: 'createType', component: TypeCreateComponent },
    { path: 'editType/:id', component: TypeEditComponent },
    { path: 'deleteType/:id', component: TypeDeleteComponent }
];