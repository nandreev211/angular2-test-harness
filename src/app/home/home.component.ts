import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { CounterCriteria } from './counter-criteria';
import { ListCriteria } from './list-criteria';
import { Title } from './title';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title,
    CounterCriteria,
    ListCriteria
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class Home {
  // Set our default values
  items = [];
  localState = { value: '' };
  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

  onCreateCounter(createdCount) {
    console.log("=============Created Count");
    console.log(createdCount);
    let item = {
      id: createdCount.data.id,
      type: "Count",
      countQty: createdCount.data.attributes.countQty,
      download: null
    }
    this.appState.add('itemList', item);
    this.items = this.appState.get('itemList');
  }

  onCreateList(createdList) {
    console.log("=============Created List");
    console.log(createdList);
    let item = {
      id: createdList.data.id,
      type: "List",
      countQty: createdList.data.attributes.listQty,
      download: createdList.data.attributes.download
    }
    this.appState.add('itemList', item);
    this.items = this.appState.get('itemList');
  }
}
