import { Component, OnInit } from '@angular/core';
// import { ExportService } from '../export.service';
import { DataStoreService } from '../data-store.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-all-page-configs',
  templateUrl: './all-page-configs.component.html',
  styleUrls: ['./all-page-configs.component.css']
})
export class AllPageConfigsComponent implements OnInit {

  page: any = {
    name: 'Page Name...',
    pageType: '',
    pageOrder: '',
    minTime: '',
    maxTime: '',
    show: false,
    activeStatus: 'inactive'
  };
  constructor(private dataStoreService: DataStoreService) { }
  allPages: any = [];
  ngOnInit() {
    // this.allPages = this.dataStoreService.getPageConfigs();
  }

  addPage() {
    // this.dataStoreService.addToPageCongifgs(JSON.parse(JSON.stringify(this.page)));
    // this.allPages = this.dataStoreService.getPageConfigs();
    this.allPages.push(JSON.parse(JSON.stringify(this.page)));
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

}
