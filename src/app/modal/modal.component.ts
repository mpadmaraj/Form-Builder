import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() title: string;
  @Input() size: string;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Output() gotJsonDataEvent: EventEmitter<File> = new EventEmitter<File>();

  modalClass = "modal ";

  constructor() { }

  ngOnInit() {
    this.modalClass += this.size;
  }

  onClose() {
    this.close.emit();
  }

  jsonDataUploaded (file) {
    this.gotJsonDataEvent.emit(file);
  }

}
