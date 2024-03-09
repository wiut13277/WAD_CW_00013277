import { Routes } from '@angular/router';
import { PriorityListComponent } from './components/priorities/priority-list/priority-list.component';
import { PriorityCreateComponent } from './components/priorities/priority-create/priority-create.component';
import { PriorityEditComponent } from './components/priorities/priority-edit/priority-edit.component';
import { PriorityDeleteComponent } from './components/priorities/priority-delete/priority-delete.component';
import { IssueListComponent } from './components/issues/issue-list/issue-list.component';
import { IssueEditComponent } from './components/issues/issue-edit/issue-edit.component';
import { IssueCreateComponent } from './components/issues/issue-create/issue-create.component';
import { IssueDeleteComponent } from './components/issues/issue-delete/issue-delete.component';

export const routes: Routes = [
    { path: 'priorities', component: PriorityListComponent },
    { path: 'createPriority', component: PriorityCreateComponent },
    { path: 'editPriority/:id', component: PriorityEditComponent },
    { path: 'deletePriority/:id', component: PriorityDeleteComponent },
    { path: 'issues', component: IssueListComponent },
    { path: 'createIssue', component: IssueCreateComponent },
    { path: 'editIssue/:id', component: IssueEditComponent },
    { path: 'deleteIssue/:id', component: IssueDeleteComponent }
];