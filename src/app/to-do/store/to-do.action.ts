import { Action } from '@ngrx/store';
import { ActionWithPayload } from '../../ActionWithPayload';
import { ToDo } from '../to-do.model';

export const GET_TODO = '[ToDo] GET_TODO';
export const CREATE_TODO = '[ToDo] CREATE_TODO';
export const DELETE_LAST_TODO = '[ToDo] DELETE_LAST_TODO';
export const DELETE_TODO_BY_ID = '[ToDo] DELETE_TODO_BY_ID';

export class GetToDo implements Action {
    readonly type = GET_TODO;
    
    constructor() {}
}

export class CreateToDo implements ActionWithPayload<ToDo[]> {
    readonly type = CREATE_TODO;
    payload: ToDo[];

    constructor(payload: ToDo[]) {
        this.payload = payload;
    }
}

export class DeleteLastToDo implements Action {
    readonly type = DELETE_LAST_TODO;
    
    constructor() {}
}

export class DeleteToDoById implements ActionWithPayload<ToDo[]> {      // EDIT
    readonly type = DELETE_TODO_BY_ID;
    payload: ToDo[];
    
    constructor(payload: ToDo[]) {
        this.payload = payload;
    }
}

export type All = GetToDo | CreateToDo | DeleteLastToDo | DeleteToDoById; 
