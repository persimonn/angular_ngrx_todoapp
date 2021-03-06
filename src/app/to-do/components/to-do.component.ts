import { ToDoState } from './../store/to-do.state';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select, Action } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CreateToDo, CREATE_TODO, GET_TODO, DELETE_LAST_TODO, DELETE_TODO_BY_ID } from '../store/to-do.action';
import { ToDoReducer } from '../store/to-do.reducers';
import { ToDo } from '../to-do.model';
import { ActionWithPayload } from '../../ActionWithPayload';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor(private store: Store<ToDoState>) { }

  ngOnInit() {
    this.ToDoState$ = this.store.pipe(select('todos'));

    let createToDoAction: ActionWithPayload<ToDo[]> = {
      type: CREATE_TODO,
      payload: [
        { Title: 'First Wishlist', IsCompleted: false, Id: 1 }, 
        { Title: 'Second Wishlist', IsCompleted: true, Id: 2 }
      ]
    }

    let getToDoAction: Action = {
      type: GET_TODO      
    }

    let deleteLastToDoAction: Action = {
      type: DELETE_LAST_TODO      
    }

    let deleteToDoByIdAction: Action = {
      type: DELETE_TODO_BY_ID      
    }

    this.store.dispatch(createToDoAction);
    this.ToDoSubscription = this.ToDoState$.pipe(map(x => this.ToDoList = x.ToDoList)).subscribe();
    this.store.dispatch(getToDoAction);
  }

  ToDoState$: Observable<ToDoState>;
  ToDoSubscription: Subscription;
  Title: string;
  Completed: boolean = false;
  Id: number;
  ToDoList: ToDo[];

  createToDo() {
    console.info(this.Title);
    let todoAction: ActionWithPayload<ToDo> = {
      type: CREATE_TODO,
      payload: { Title: this.Title, IsCompleted: this.Completed, Id: this.Id }
    }
    this.store.dispatch(todoAction);
  }

  deleteLastToDo() {
    let todoAction: Action = {
      type: DELETE_LAST_TODO
    }
    this.store.dispatch(todoAction);
    // this.store.select(state => state).subscribe((state) => {
    //   state['todos']['ToDoList'].pop();
    // });
  }

  deleteToDoById() {
    let todoAction: Action = {
      type: DELETE_TODO_BY_ID
    }
    this.store.dispatch(todoAction);
    // this.store.select(state => state).subscribe((state) => {
    //   state['todos']['ToDoList'].pop();
    // });
  }
  
  getEntryId() {
    console.log("Test string");
  }

  getEntryData() {
    this.getEntryId();
  }

  ngOnDestroy() {
      this.ToDoSubscription.unsubscribe();
  }
}