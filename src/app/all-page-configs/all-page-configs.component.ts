import { Component, OnInit } from '@angular/core';
// import { ExportService } from '../export.service';
import { DataStoreService } from '../data-store.service';
import * as FileSaver from 'file-saver';
import { field, PageDetail } from '../global.model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-all-page-configs',
  templateUrl: './all-page-configs.component.html',
  styleUrls: ['./all-page-configs.component.css']
})
export class AllPageConfigsComponent implements OnInit {

  page: PageDetail = {
    name: 'Page Name...',
    pageType: '',
    pageOrder: null,
    minTime: null,
    maxTime: null,
    minMaxTimeUnit: null,
    show: false,
    activeStatus: 'inactive'
  };

  updatePageDetail: PageDetail;

  allPages: PageDetail[] = [];

  isPageUpdate = false;
  showAddPageModal = false;
  modalTitle = "";
  fileModalTitle = "Upload JSON file";
  showUploadJsonModal = false;

  constructor(private dataStoreService: DataStoreService) { }

  ngOnInit() {
    this.dataStoreService.allPages.subscribe((pages: PageDetail[]) => {
      this.allPages = pages || [];
    });
  }

  onModalClose() {
    this.showAddPageModal = false;
    this.showUploadJsonModal = false;
    this.modalTitle = "";
  }

  addPage() {
    // this.dataStoreService.addToPageCongifgs(JSON.parse(JSON.stringify(this.page)));
    // this.allPages = this.dataStoreService.getPageConfigs();
    this.showAddPageModal = true;
    this.modalTitle = "Add New Page";
    this.isPageUpdate = false;
    // this.allPages.push(JSON.parse(JSON.stringify(this.page)));
  }

  savePageDetails(page: PageDetail) {
    if (this.isPageUpdate) {
      for (let p in this.allPages) {
        if (this.allPages[p].id === page.id) {
          this.allPages[p] = page;
          break;
        }
      }
    } else {
      page.id = Math.floor(Date.now() / 1000);
      this.allPages.push(page);
    }
    this.allPages.sort(this.compare);
    this.dataStoreService.allPages.next(this.allPages);
  }

  editPage(page: PageDetail) {
    this.showAddPageModal = true;
    this.modalTitle = "Update Page";
    this.updatePageDetail = page;
    this.isPageUpdate = true;
  }

  removePageDetail() {
    swal({
      title: 'Are you sure?',
      text: "Do you want to remove page?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00B96F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove!'
    }).then((result) => {
      if (result.value) {
        this.allPages = this.allPages.filter(page => page.id !== this.updatePageDetail.id);
        this.dataStoreService.allPages.next(this.allPages);
        this.updatePageDetail = null;
        this.showAddPageModal = false;
        this.modalTitle = "";
      }
    });
  }

  savePage(page) {
    this.allPages = this.allPages.filter(p => page.id === p.id ? page : p);
    this.dataStoreService.allPages.next(this.allPages);
    swal({
      title: 'Success',
      text: "Successfully Saved !!",
      type: 'success',
      confirmButtonColor: '#00B96F',
      confirmButtonText: 'OK'
    });
  }

  exportFieldConfigs() {
    let fieldConfigs = this.dataStoreService.getFieldConfigs();
    this.exportToCsv(fieldConfigs, 'FieldConfig');
  }

  exportPageConfigs() {
    let pageConfigs = this.dataStoreService.getPageConfigs();
    this.exportToCsv(pageConfigs, 'PageConfig');
  }

  pageNameUpdated(pageName, i) {
    // this.allPages = this.dataStoreService.getPageConfigs();
    this.allPages.forEach((element, index) => {
      if (index === i) {
        element.name = pageName;
      }
    });
  }

  showThisPage(i) {
    this.allPages.forEach((element, index) => {
      if (index === i) {
        element.show = true;
        element.activeStatus = 'active';
      } else {
        element.show = false;
        element.activeStatus = 'inactive';
      }
    });
  }

  pageOrderUpdated(pageOrder, i) {
    this.allPages.forEach((element, index) => {
      if (index === i) {
        element.pageOrder = parseInt(pageOrder);
      }
    });
    this.allPages.sort(this.compare);
  }

  exportAsJson() {
    let allJson = JSON.parse(localStorage.getItem("allPages"));
    const blob = new Blob([JSON.stringify(allJson)], { type: 'application/json' });
    FileSaver.saveAs(blob, 'FormBuilder_' + (+new Date()) + '.json');
  }

  jsonDataUploaded(data) {
    console.log('in json data uploaded');
    console.log(data);
    var reader = new FileReader();
    let fileData = [];
    reader.onload = () => {
      fileData = JSON.parse((reader.result).toString());
      if (Array.isArray(fileData) && (typeof fileData[0] === 'object')) {
        let keys = Object.keys(fileData[0]);
        if ((keys.indexOf('leftPanel') !== -1) && ((keys.indexOf('rightPanel') !== -1))) {
          swal({
            title: 'Are you sure?',
            text: "Your changes will be lost if any.",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00B96F',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove!'
          }).then((result) => {
            if (result.value) {
              this.allPages = fileData;
              localStorage.setItem("allPages", JSON.stringify(this.allPages));
            }
          });
        } else {
          swal('Error', 'Uploaded JSON not in expected format!!!');
        }
      } else {
        swal('Error', 'Uploaded JSON not in expected format!');
      }
    };
    reader.readAsText(data);
  }

  /**
 * Saves the file on the client's machine via FileSaver library.
 *
 * @param buffer The data that need to be saved.
 * @param fileName File name to save as.
 * @param fileType File type to save as.
 */
  private saveAsFile(buffer: any, fileName: string, fileType: string): void {
    const data: Blob = new Blob([buffer], { type: fileType });
    FileSaver.saveAs(data, fileName);
  }

  /**
   * Creates an array of data to CSV. It will automatically generate a title row based on object keys.
   *
   * @param rows array of data to be converted to CSV.
   * @param fileName filename to save as.
   * @param columns array of object properties to convert to CSV. If skipped, then all object properties will be used for CSV.
   */
  public exportToCsv(rows: object[], fileName: string, columns?: string[]): string {
    if (!rows || !rows.length) {
      return;
    }
    const separator = ',';
    const keys = Object.keys(rows[0]).filter(k => {
      if (columns ? (columns.length > 0) : false) {
        return columns.includes(k);
      } else {
        return true;
      }
    });
    const csvContent =
      keys.join(separator) +
      '\n' +
      rows.map(row => {
        return keys.map(k => {
          let cell = row[k] === null || row[k] === undefined ? '' : row[k];
          cell = cell instanceof Date
            ? cell.toLocaleString()
            : cell.toString().replace(/"/g, '""');
          if (cell.search(/("|,|\n)/g) >= 0) {
            cell = `"${cell}"`;
          }
          return cell;
        }).join(separator);
      }).join('\n');
    this.saveAsFile(csvContent, `${fileName}.csv`, 'csv');
  }

  compare(a, b) {
    if (a.pageOrder < b.pageOrder) {
      return -1;
    }
    if (a.pageOrder > b.pageOrder) {
      return 1;
    }
    return 0;
  }
}
