import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';

@Injectable()
export class CounterCriteriaService {
  constructor(public apiService: ApiService) {
  }

  createCounter(data) {
    console.log("==================create counter");
    return this.apiService.post('/counts', data)
  ;
  }

  getCounter(id) {
    return this.apiService.get(`/counts/queue-jobs/${id}`)
    ;
  }

}
