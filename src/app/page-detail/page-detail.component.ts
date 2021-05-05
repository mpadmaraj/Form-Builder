import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {field, PageDetail} from '../global.model';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {

  @ViewChild("pageDetailForm", null) pageDetailForm: NgForm;

  @Input() updatePageDetail;

  @Output() modalClose: EventEmitter<void> = new EventEmitter<void>();
  @Output() pageDetails: EventEmitter<PageDetail> = new EventEmitter<PageDetail>();
  @Output() removePageDetail: EventEmitter<PageDetail> = new EventEmitter<PageDetail>();

  leftPanelModelFields: Array<field> = [];
  rightPanelModelFields: Array<field> = [];

  pageTypes = [
    'Custom',
    'List',
    'Statement',
    'References'
  ];

  timeUnits = [
    'Seconds',
    'Minutes',
    'Hours',
    'Days'
  ];

  page: PageDetail = {
    name: '',
    pageType: 'Custom',
    pageOrder: null,
    minTime: 5,
    maxTime: 10,
    minMaxTimeUnit: 'Minutes',
    leftPanel: this.leftPanelModelFields,
    rightPanel: this.rightPanelModelFields
  };

  saveButton = "Create New Page";
  btnSaveClass = "save-btn btn ";

  constructor() { }

  ngOnInit() {
    if (this.updatePageDetail) {
      this.page = this.updatePageDetail;
      this.btnSaveClass += " btn-warning";
      this.saveButton = "Update Page";
    } else {
      this.btnSaveClass += " btn-success";
    }
  }

  onSubmit() {
    this.pageDetails.emit(this.page);
    this.modalClose.emit();
  }

  removePage() {
    this.removePageDetail.emit();
  }
}
