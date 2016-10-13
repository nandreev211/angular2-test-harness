import { Component, Output, EventEmitter } from '@angular/core';

import { AppState } from '../../app.service';
import { CounterCriteriaSample } from '../counter-criteria-sample';
import { CounterCriteriaSampleService } from '../counter-criteria-sample/counter-criteria-sample.service';
import { CounterCriteriaService } from './counter-criteria.service';
import * as Rx from 'rxjs/Rx';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'counter-criteria',  // <counter-criteria></counter-criteria>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    CounterCriteriaSample,
    CounterCriteriaSampleService,
    CounterCriteriaService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './counter-criteria.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './counter-criteria.component.html'
})
export class CounterCriteria {
  @Output() createCounter = new EventEmitter();
  counterCriteriaData = "";
  datasetCode         = "";
  geoCriteria         = "";
  demoCriteria        = "";
  invalidJSON         = false;
  stopPollingS = new Rx.Subject();

  constructor(
    public appState: AppState, 
    public counterCriteriaSampleService: CounterCriteriaSampleService, 
    public counterCriteriaService: CounterCriteriaService
    ) {
    let sampleData = counterCriteriaSampleService.getData('simple');
    this.counterCriteriaData = sampleData;
    this.parseData(this.counterCriteriaData);
  }

  onCounterCriteriaSampleChanged() {
    console.log("sample changed");
    let sampleData = this.appState.get('counterCriteriaSample');
    this.counterCriteriaData = sampleData;
    this.parseData(this.counterCriteriaData);
  }

  parseData(data) {
    if (data.data && data.data.attributes && data.data.attributes.criteria) {
      this.datasetCode = data.data.attributes.criteria.datasetCode;
      if (data.data.attributes.criteria.geoCriteria && data.data.attributes.criteria.geoCriteria.children) {
        this.geoCriteria = data.data.attributes.criteria.geoCriteria.children.map(item => {
          return item.criterionCode;
        }).join(', ');
      }
      if (data.data.attributes.criteria.demoCriteria && data.data.attributes.criteria.demoCriteria.children) {
        this.demoCriteria = data.data.attributes.criteria.demoCriteria.children.map(item => {
          return item.criterionCode;
        }).join(', ');
      }
    }
  }

  get counterCriteriaValue () {
    return JSON.stringify(this.counterCriteriaData, null, 4);
  }
    
  set counterCriteriaValue (v) {
    try{
      this.counterCriteriaData = JSON.parse(v);
      this.parseData(this.counterCriteriaData);
      this.invalidJSON = false;
    }
    catch(e) {
      this.invalidJSON = true;
    };
  }

  onSubmit() {
    console.log(this.invalidJSON);

    if (!this.invalidJSON) {
      this.counterCriteriaService.createCounter(this.counterCriteriaData)
      .subscribe((createdCount: any) => this.pollCount(createdCount.data.id));
    }
    return false;
  } 

  pollCount(id) {
    this.stopPollingS = new Rx.Subject();
    this.counterCriteriaService.pollCount(id, this.stopPollingS).subscribe((data: any) => this.checkPollCount(data))
  }

  checkPollCount(data) {
    if (data.data.attributes.status == "OK") {
      this.stopPollingS.next(true);
      this.createCounter.next(data)
    }
  }
}
