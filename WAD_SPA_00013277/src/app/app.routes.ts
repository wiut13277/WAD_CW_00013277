import { Routes } from '@angular/router';
import { TypeListComponent } from './components/types/type-list/type-list.component';
import { TypeCreateComponent } from './components/types/type-create/type-create.component';

export const routes: Routes = [
    { path: 'types', component: TypeListComponent },
    { path: 'createType', component: TypeCreateComponent }
];