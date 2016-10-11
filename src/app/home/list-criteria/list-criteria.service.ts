import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';

@Injectable()
export class ListCriteriaService {
  constructor(public apiService: ApiService) {
  }

  createList(data) {
    console.log("============create list");
    return this.apiService.post('/lists', data)
  ;
  }

  getList(id) {
    return this.apiService.get(`/lists/queue-jobs/${id}`)
    ;
  }

}
