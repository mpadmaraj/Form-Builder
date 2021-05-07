import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @Output() modalClose: EventEmitter<void> = new EventEmitter<void>();
  @Output() gotJsonDataEvent: EventEmitter<File> = new EventEmitter<File>();
  fileToUpload: File = null;
  constructor() { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.gotJsonDataEvent.emit(this.fileToUpload);
    this.modalClose.emit();
  }
}
