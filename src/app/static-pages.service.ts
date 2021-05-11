import { Injectable, OnInit, Component } from '@angular/core';
import { field, PageDetail } from './global.model';
import * as BasicInfoData from '../assets/data/BasicInfo.json';
import * as EducationHistoryData from '../assets/data/EducationHistory.json';

@Injectable({
  providedIn: 'root'
})
export class StaticPagesService implements OnInit {

  basicInfoTemplate:any;
  educationHistoryTemplate:any;
  constructor() { }

  ngOnInit () {
  }

  getTemplate (data):PageDetail {
    if (data === 'Basic Information') {
      this.basicInfoTemplate = BasicInfoData;
      console.log(BasicInfoData);
      return this.basicInfoTemplate.default;
    } else if (data === 'Education History') {
      this.educationHistoryTemplate = EducationHistoryData;
      return this.educationHistoryTemplate.default;
    }
  }

}
