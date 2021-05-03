import { Injectable } from '@angular/core';
import { studentOnlineApplicationFields, studentOnlineApplicationListFields } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  allPageConfigs:any = [];
  allFieldConfigs:any = [];
  soaFields = JSON.parse(JSON.stringify(studentOnlineApplicationFields));
  listFields = JSON.parse(JSON.stringify(studentOnlineApplicationListFields));

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

  // updateAPINames (name, apiName, pageType) {
  //   if (pageType === 'Custom') {
  //     this.soaFields
  //   }
  // }

}
