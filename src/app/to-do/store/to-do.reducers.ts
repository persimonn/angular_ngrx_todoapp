import { Action } from '@ngrx/store';
import { ActionWithPayload } from '../../ActionWithPayload';
import { ToDo } from '../to-do.model';
import { ToDoState, initializeState } from './to-do.state';
import * as ToDoActions from './to-do.action';
import { Observable, Subscription } from 'rxjs';

const initialState = initializeState();

export function ToDoReducer(state: ToDoState = initialState, 
    action: Action) {
        console.log(state, action);
    
    switch (action.type) {
        case ToDoActions.GET_TODO:
            return { ...state, Loaded: false, Loading: true };
 
        case ToDoActions.CREATE_TODO:
            return ({
                ...state,
                ToDoList: state.ToDoList.concat(
                     (action as ActionWithPayload<ToDo[]>).payload
                ),
                Loaded: false, Loading: true
            });
        
        case ToDoActions.DELETE_LAST_TODO:
            return ({
                ...state,
                ...state['ToDoList'].pop(),
                  Loaded: false, Loading: true
            });
        
        case ToDoActions.DELETE_TODO_BY_ID:         // EDIT
            return ({
                ...state,
                ...state['ToDoList'].pop(),
                  Loaded: false, Loading: true
            });

        default: 
            return state; 

    }
}