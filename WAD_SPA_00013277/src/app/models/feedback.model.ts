import { Type } from "./type.model";

export class Feedback{
    id: number = 0;
    title: string = '';
    description: string = '';
    type: Type = { id: 0, name: '' };
}