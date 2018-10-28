import { Action } from '@ngrx/store';
import { ActionWithPayload } from '../../ActionWithPayload';
import { ToDo } from '../to-do.model';
import { ToDoState, initializeState } from './to-do.state';
import * as ToDoActions from './to-do.action';

const initialState = initializeState();

export function ToDoReducer(state: ToDoState = initialState, action: Action) {

    switch (action.type) {
        case ToDoActions.GET_TODO:
            return { ...state, Loaded: false, Loading: true };
 
        case ToDoActions.CREATE_TODO:
            return ({
                ...state,
                ToDoList: state.ToDoList.concat((action as ActionWithPayload<ToDo[]>).payload),
                Loaded: false, Loading: true
            });

        default: 
            return state; 

    }
}