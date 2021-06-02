import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { studentOnlineApplicationFields, studentOnlineApplicationListFields } from '../environments/environment';
import {PageDetail} from './global.model';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  allPageConfigs:any = [];
  allFieldConfigs:any = [];
  soaFields:any = [];
  listFields:any = [];
  soaFieldsUsed:any = {};
  listFieldsUsed:any = {};
  referenceFieldsUsed:any = {};

  allPages = new BehaviorSubject<PageDetail[]>([]);

  constructor() { 
    this.allPages.next(JSON.parse(localStorage.getItem("allPages")))
    this.allPages.subscribe(pages=> {
      localStorage.setItem("allPages", JSON.stringify(pages));
    });

    let temp1 = JSON.parse(JSON.stringify(studentOnlineApplicationFields));
    let temp2 = JSON.parse(JSON.stringify(studentOnlineApplicationListFields));

    temp1.forEach(element => {
      if ((element.Type !== 'Formula') && (element.Type !== 'Lookup')) {
        this.soaFields.push(element);
      }
    });
    temp2.forEach(element => {
      if ((element.Type !== 'Formula') && (element.Type !== 'Lookup')) {
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

  updateApiNamesUsed (name, pageType, apiName) {
    if (pageType === 'Custom') {
      this.soaFieldsUsed[name] = apiName;
      let apisUsedArray = Object.values(this.soaFieldsUsed);
      this.soaFields.forEach(element => {
        if (apisUsedArray.indexOf(element.APIName) !== -1) {
          element.apiUsed = true;
        }
      });
    } else if (pageType === 'List') {
      this.listFieldsUsed[name] = apiName;
      let apisUsedArray = Object.values(this.listFieldsUsed);
      this.listFields.forEach(element => {
        if (apisUsedArray.indexOf(element.APIName) !== -1) {
          element.apiUsed = true;
        }
      });
    }
  }
  
}
