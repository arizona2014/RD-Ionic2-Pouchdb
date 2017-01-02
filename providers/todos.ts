import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import PouchDB from 'pouchdb';

/*
  Generated class for the Todos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Todos {

  data:any;
  db:any;
  remote:any;

  constructor(public http: Http) {

    this.db = new PouchDB('ionpou');
    this.remote = 'http://localhost:5984/ionpou';
    let options = {
      live: true,
      retry: true,
      continous: true
    };
    this.db.sync(this.remote, options);

  }

  getTodos() {

  }

  createTodo(todo){

  }

  updateTodo(todo){

  }

  deleteTodo(todo){

  }

  handleChange(change){

  }

}
