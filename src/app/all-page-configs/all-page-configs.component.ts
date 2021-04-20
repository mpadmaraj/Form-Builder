import { Component, OnInit } from '@angular/core';
import { ExportService } from '../export.service';
import { DataStoreService } from '../data-store.service';
@Component({
  selector: 'app-all-page-configs',
  templateUrl: './all-page-configs.component.html',
  styleUrls: ['./all-page-configs.component.css']
})
export class AllPageConfigsComponent implements OnInit {

  constructor(private exportService: ExportService, private dataStoreService:DataStoreService) { }

  ngOnInit() {
  }

  exportFieldConfigs () {
    let fieldConfigs = this.dataStoreService.getFieldConfigs();
    this.exportService.exportToCsv(fieldConfigs, 'FieldConfig');
  }

  exportPageConfigs () {
    let pageConfigs = this.dataStoreService.getPageConfigs();
    this.exportService.exportToCsv(pageConfigs, 'PageConfig');
  }

}
