import { Component, Output, EventEmitter } from '@angular/core';

import { AppState } from '../../app.service';

import { CounterCriteriaSampleService } from './counter-criteria-sample.service';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'counter-criteria-sample',  // <counter-criteria></counter-criteria>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    CounterCriteriaSampleService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './counter-criteria-sample.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './counter-criteria-sample.component.html'
})
export class CounterCriteriaSample {
  @Output() counterCriteriaSampleChanged = new EventEmitter();
  // Set our default values
  counterCriteriaSample = "simple";
  // TypeScript public modifiers
  constructor(public appState: AppState, public counterCriteriaSampleService: CounterCriteriaSampleService) {
    let sampleData = counterCriteriaSampleService.getData(this.counterCriteriaSample);
    this.appState.set('counterCriteriaSample', sampleData);
  }

  onSampleChange(value) {
    this.counterCriteriaSample = value;
    let sampleData = this.counterCriteriaSampleService.getData(value);
    this.appState.set('counterCriteriaSample', sampleData);
    this.counterCriteriaSampleChanged.next();
  }
}
