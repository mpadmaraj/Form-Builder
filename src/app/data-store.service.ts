import { Injectable } from '@angular/core';
import { studentOnlineApplicationFields, studentOnlineApplicationListFields } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  allPageConfigs:any = [];
  allFieldConfigs:any = [];
  soaFields:any = [];
  listFields:any = [];

  constructor() {
    let temp1 = JSON.parse(JSON.stringify(studentOnlineApplicationFields));
    let temp2 = JSON.parse(JSON.stringify(studentOnlineApplicationListFields));

    temp1.forEach(element => {
      if (element.Type !== 'Formula') {
        this.soaFields.push(element);
      }
    });
    temp2.forEach(element => {
      if (element.Type !== 'Formula') {
        this.listFields.push(element);
      }
    });
  }

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
