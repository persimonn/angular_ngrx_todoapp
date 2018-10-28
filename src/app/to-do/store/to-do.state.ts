import { ToDo } from '../to-do.model';

export interface ToDoState {
    Loading: boolean;
    Loaded: boolean;
    ToDoList: ToDo[];
}

export const initializeState = (): ToDoState => {
    return ({
        ToDoList: [],
        Loading: true,
        Loaded: false
    });
}