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
  soaFields = JSON.parse(JSON.stringify(studentOnlineApplicationFields));
  listFields = JSON.parse(JSON.stringify(studentOnlineApplicationListFields));

  allPages = new BehaviorSubject<PageDetail[]>([]);

  constructor() { 
    this.allPages.next(JSON.parse(localStorage.getItem("allPages")))
    this.allPages.subscribe(pages=> {
      localStorage.setItem("allPages", JSON.stringify(pages));
    })
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

  
}
