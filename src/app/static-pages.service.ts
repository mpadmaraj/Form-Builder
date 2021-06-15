import { Injectable, OnInit, Component } from '@angular/core';
import { field, PageDetail } from './global.model';
import * as BasicInfoData from '../assets/data/BasicInfo.json';
import * as EducationHistoryData from '../assets/data/EducationHistory.json';
import * as ProfExpData from '../assets/data/ProfessionalExp.json';
import * as ReferenceRequirementsData from '../assets/data/ReferenceRequirements.json';
import * as ReferAFriendData from '../assets/data/ReferAFriend.json';
import * as LORData from '../assets/data/LetterofRecommendation.json';
import * as PersonalStatementData from '../assets/data/PersonalStatement.json';

@Injectable({
  providedIn: 'root'
})
export class StaticPagesService implements OnInit {

  basicInfoTemplate:any;
  educationHistoryTemplate:any;
  profExpTemplate:any;
  referenceRequirementsTemplate:any;
  referAFriendTemplate:any;
  lorTemplate:any;
  personalStatementTemplate:any;
  constructor() { }

  ngOnInit () {
  }

  getTemplate (data):PageDetail {
    if (data === 'Basic Information') {
      this.basicInfoTemplate = JSON.parse(JSON.stringify(BasicInfoData));
      // console.log(BasicInfoData);
      return this.basicInfoTemplate.default;
    } else if (data === 'Education History') {
      this.educationHistoryTemplate = JSON.parse(JSON.stringify(EducationHistoryData));
      return this.educationHistoryTemplate.default;
    } else if (data === 'Professional Experience') {
      this.profExpTemplate = JSON.parse(JSON.stringify(ProfExpData));
      return this.profExpTemplate.default;
    } else if (data === 'Reference Requirements') {
      this.referenceRequirementsTemplate = JSON.parse(JSON.stringify(ReferenceRequirementsData));
      return this.referenceRequirementsTemplate.default;
    } else if (data === 'Refer a Friend') {
      this.referAFriendTemplate = JSON.parse(JSON.stringify(ReferAFriendData));
      return this.referAFriendTemplate.default;
    } else if (data === 'Letter of Recommendation') {
      this.lorTemplate = JSON.parse(JSON.stringify(LORData));
      return this.lorTemplate.default;
    } else if (data === 'Personal Statement') {
      this.personalStatementTemplate = JSON.parse(JSON.stringify(PersonalStatementData));
      return this.personalStatementTemplate.default;
    }
  }

}
