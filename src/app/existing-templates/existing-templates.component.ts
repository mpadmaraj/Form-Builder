import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-existing-templates',
  templateUrl: './existing-templates.component.html',
  styleUrls: ['./existing-templates.component.css']
})
export class ExistingTemplatesComponent implements OnInit {

  @Output() modalClose: EventEmitter<void> = new EventEmitter<void>();
  @Output() templateSelectedEvent = new EventEmitter();
  constructor() { }

  templateNames = [
    'Basic Information',
    'Education History',
    'Professional Experience',
    'Reference Requirements',
    'Refer a Friend',
    'Letter of Recommendation',
    'Personal Statement'
  ];
  selectedTemplate = '';

  ngOnInit() {
  }

  useTemplate () {
    this.templateSelectedEvent.emit(this.selectedTemplate);
  }

}
