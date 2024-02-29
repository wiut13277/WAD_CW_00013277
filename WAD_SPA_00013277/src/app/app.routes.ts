import { Routes } from '@angular/router';
import { TypeListComponent } from './components/types/type-list/type-list.component';
import { TypeCreateComponent } from './components/types/type-create/type-create.component';
import { TypeEditComponent } from './components/types/type-edit/type-edit.component';
import { TypeDeleteComponent } from './components/types/type-delete/type-delete.component';
import { FeedbackListComponent } from './components/feedbacks/feedback-list/feedback-list.component';
import { FeedbackEditComponent } from './components/feedbacks/feedback-edit/feedback-edit.component';
import { FeedbackCreateComponent } from './components/feedbacks/feedback-create/feedback-create.component';
import { FeedbackDeleteComponent } from './components/feedbacks/feedback-delete/feedback-delete.component';

export const routes: Routes = [
    { path: 'types', component: TypeListComponent },
    { path: 'createType', component: TypeCreateComponent },
    { path: 'editType/:id', component: TypeEditComponent },
    { path: 'deleteType/:id', component: TypeDeleteComponent },
    { path: 'feedbacks', component: FeedbackListComponent },
    { path: 'createFeedback', component: FeedbackCreateComponent },
    { path: 'editFeedback/:id', component: FeedbackEditComponent },
    { path: 'deleteFeedback/:id', component: FeedbackDeleteComponent }
];