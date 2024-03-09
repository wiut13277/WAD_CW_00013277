import { Priority } from "./priority.model";

export class Issue{
    id: number = 0;
    title: string = '';
    description: string = '';
    priority: Priority = { id: 0, name: '' };
    openedOn: Date = new Date();
}