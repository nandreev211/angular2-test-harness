import { Component, Output, EventEmitter } from '@angular/core';

import { AppState } from '../../app.service';
import { ListCriteriaSampleService } from './list-criteria-sample.service';
import { ListCriteriaService } from './list-criteria.service';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'list-criteria',  // <counter-criteria></counter-criteria>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    ListCriteriaSampleService,
    ListCriteriaService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './list-criteria.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './list-criteria.component.html'
})
export class ListCriteria {
  @Output() createList = new EventEmitter();
  listCriteriaData = {};
  datasetCode = ""
  qtyDesired = ""
  countId = ""
  invalidJSON = false;
  constructor(
    public appState: AppState, 
    public listCriteriaSampleService: ListCriteriaSampleService, 
    public listCriteriaService: ListCriteriaService
  ) {
    let sampleData = listCriteriaSampleService.getData();
    this.appState.set('listCriteriaSample', sampleData);
    this.listCriteriaData = sampleData;
    this.parseData(this.listCriteriaData);
  }

  parseData(data) {
    if (data.data && data.data.attributes && data.data.attributes.listCriteria) {
      this.datasetCode = data.data.attributes.listCriteria.datasetCode;
      this.qtyDesired = data.data.attributes.listCriteria.qtyDesired;
      this.countId = data.data.attributes.listCriteria.countId;
    }
  }


  get listCriteriaValue () {
    return JSON.stringify(this.listCriteriaData, null, 4);
  }
    
  set listCriteriaValue (v) {
    try{
      this.listCriteriaData = JSON.parse(v);
      this.parseData(this.listCriteriaData);
      this.invalidJSON = false;
    }
    catch(e) {
      this.invalidJSON = true;
    };
  }


  onSubmit() {
    if (!this.invalidJSON) {
      // this.createCounter.next({ data: this.counterCriteriaData });
      this.listCriteriaService.createList(this.listCriteriaData)
      .subscribe((createdList: any) => this.createList.next(createdList));
    }
    return false;
  } 

}
