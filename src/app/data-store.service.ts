import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  allPageConfigs:any = [];
  allFieldConfigs:any = [];

  constructor() { }

  addToFieldCongifgs (fieldConfig) {
    this.allFieldConfigs.push(fieldConfig);
  }

  getFieldConfigs () {
    return this.allFieldConfigs;
  }

  addToPageCongifgs (pageConfig) {
    this.allPageConfigs.push(pageConfig);
  }

  getPageConfigs () {
    return this.allPageConfigs;
  }
}
