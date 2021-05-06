import {Component, OnInit} from '@angular/core';
import {DataStoreService} from '../data-store.service';
import {PageDetail} from '../global.model';

@Component({
  selector: 'app-preview-pages',
  templateUrl: './preview-pages.component.html',
  styleUrls: ['./preview-pages.component.css']
})
export class PreviewPagesComponent implements OnInit {

  allPages: PageDetail[] = [];
  pagesById: any = {};
  pageDetail: PageDetail;

  constructor(private dataService: DataStoreService) { }

  ngOnInit() {
    let arr = [{id: 1, name: "Finalize Application", pageOrder: 1000, pageType: "Custom"}];
    this.dataService.allPages.subscribe(pages => {
      this.allPages = pages.concat(arr);
      this.allPages.forEach(page => {
        let id: any = page.id;
        this.pagesById[id] = page;
        page.name = page.name.replace(" ", "\r\n");
      });
      if (!this.pageDetail) {
        this.pageDetail = pages[0];
      }
      this.showThisPage(pages[0].id);
    });
  }

  showThisPage(id) {
    this.pageDetail = this.pagesById[id];
  }
}
