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
      this.showThisPage(pages[0].id);
    });
  }

  showThisPage(id) {
    console.log(id);
    console.log(this.pagesById[id]);
    this.pageDetail = this.pagesById[id];
    // this.allPages.forEach((element, index) => {
    //   if (index === i) {
    //     element.show = true;
    //     element.activeStatus = 'active';
    //   } else {
    //     element.show = false;
    //     element.activeStatus = 'inactive';
    //   }
    //   element.name = element.name.replace(" ", "\r \n");
    // });
  }
}
