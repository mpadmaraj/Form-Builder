import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {DndDropEvent, DropEffect} from 'ngx-drag-drop';
import {field, PageDetail, value} from '../global.model';
import swal from 'sweetalert2';
import {DataStoreService} from '../data-store.service';
import {StaticPagesService} from '../static-pages.service';

@Component({
  selector: 'app-page-config',
  templateUrl: './page-config.component.html',
  styleUrls: ['./page-config.component.css']
})
export class PageConfigComponent implements OnInit {

  @Input() pageDetail: PageDetail;

  @Output() savePageEvent = new EventEmitter<any>();

  value: value = {
    label: "",
    value: ""
  };
  success = false;

  fieldModels: Array<field> = [
    {
      "apiName": "",
      "notes": "",
      "type": "text",
      "icon": "fa-font",
      "label": "Text",
      "description": "Enter your name",
      "className": "red-border",
      "subtype": "text",
      "regex": "",
      "handle": true,
    },
    {
      "apiName": "",
      "notes": "",
      "type": "email",
      "icon": "fa-envelope",
      "label": "Email",
      "description": "Enter your email",
      "className": "red-border",
      "subtype": "text",
      "regex": "^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$",
      "errorText": "Please enter a valid email",
      "handle": true
    },
    {
      "apiName": "",
      "notes": "",
      "type": "phone",
      "icon": "fa-phone",
      "label": "Phone",
      "description": "Enter your phone",
      "className": "red-border",
      "subtype": "text",
      "regex": "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
      "errorText": "Please enter a valid phone number",
      "handle": true
    },
    {
      "apiName": "",
      "notes": "",
      "type": "number",
      "label": "Number",
      "icon": "fa-html5",
      "description": "Age",
      "className": "red-border",
      "value": "20",
      "min": 12,
      "max": 90
    },
    {
      "apiName": "",
      "notes": "",
      "type": "date",
      "icon": "fa-calendar",
      "label": "Date",
      "className": "red-border"
    },
    // {
    //   "apiName": "",
    //   "notes": "",
    //   "type": "textarea",
    //   "icon":"fa-text-width",
    //   "label": "Textarea" 
    // },
    {
      "apiName": "",
      "notes": "",
      "type": "paragraph",
      "icon": "fa-paragraph",
      "label": "Paragraph",
      "className": "green-border",
      "description": "Type your text to display here only"
    },
    {
      "apiName": "",
      "notes": "",
      "type": "checkbox",
      "label": "Checkbox",
      "icon": "fa-list",
      "description": "Checkbox",
      "inline": true,
      "className": "red-border",
      "values": [
        {
          "label": "Option",
          "value": "option"
        }
      ]
    },
    {
      "apiName": "",
      "notes": "",
      "type": "radio",
      "icon": "fa-list-ul",
      "label": "Radio",
      "className": "red-border",
      "description": "Radio boxes",
      "values": [
        {
          "label": "Option 1",
          "value": "option-1"
        },
        {
          "label": "Option 2",
          "value": "option-2"
        }
      ]
    },
    {
      "apiName": "",
      "notes": "",
      "type": "autocomplete",
      "icon": "fa-bars",
      "label": "Select",
      "description": "Select",
      "className": "red-border",
      "values": [
        {
          "label": "Option 1",
          "value": "option-1"
        },
        {
          "label": "Option 2",
          "value": "option-2"
        },
        {
          "label": "Option 3",
          "value": "option-3"
        }
      ]
    },
    {
      "apiName": "",
      "notes": "",
      "type": "file",
      "icon": "fa-file",
      "label": "File Upload",
      "subtype": "file",
      "className": "green-border"
    },
    {
      "apiName": "",
      "notes": "",
      "type": "header",
      "icon": "fa-header",
      "label": "Header",
      "className": "red-border"
    },
    {
      "apiName": "",
      "notes": "",
      "type": "2in1row",
      "icon": "fa-font",
      "label": "2in1row",
      "description": "Enter your name",
      "className": "red-border",
      "subtype": "text",
      "regex": "",
      "handle": true,
      "subClassName": "col-6",
      "subFields": [
        {
          label: 'Text',
          apiName: '',
          required: false
        },
        {
          label: 'Text',
          apiName: '',
          required: false
        }
      ]
    },
    {
      "apiName": "",
      "notes": "",
      "type": "3in1row",
      "icon": "fa-font",
      "label": "3in1row",
      "description": "Enter your name",
      "className": "red-border",
      "subClassName": "col-4",
      "subtype": "text",
      "regex": "",
      "handle": true,
      "subFields": [
        {
          label: 'Text',
          apiName: '',
          required: false
        },
        {
          label: 'Text',
          apiName: '',
          required: false
        },
        {
          label: 'Text',
          apiName: '',
          required: false
        }
      ]
    },
  ];

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

  headingTypes = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
  leftPanelStyles = ['Left-Panel-Desc-Large', 'Left-Panel-Desc-Large', 'Left-Panel-Desc-Large'];

  constructor(private dataStoreService: DataStoreService, private staticPagesService: StaticPagesService) { }
  applicationFields = this.dataStoreService.soaFields;
  listFields = this.dataStoreService.listFields;
  
  fieldNameApiMapping = {};
  ngOnInit() {

  }

  onDragStart(event: DragEvent) {
    console.log("drag started", JSON.stringify(event, null, 2));
  }

  onDragEnd(event: DragEvent) {
    console.log("drag ended", JSON.stringify(event, null, 2));
  }

  onDraggableCopied(event: DragEvent) {
    console.log("draggable copied", JSON.stringify(event, null, 2));
  }

  onDraggableLinked(event: DragEvent) {
    console.log("draggable linked", JSON.stringify(event, null, 2));
  }

  onDragged(item: any, list: any[], effect: DropEffect) {
    if (effect === "move") {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  onDragCanceled(event: DragEvent) {
    console.log("drag cancelled", JSON.stringify(event, null, 2));
  }

  onDragover(event: DragEvent) {
    console.log("dragover", JSON.stringify(event, null, 2));
  }

  onDrop(event: DndDropEvent, list?: any[]) {
    if (list && (event.dropEffect === "copy" || event.dropEffect === "move")) {

      if (event.dropEffect === "copy")
        event.data.name = event.data.type + '-' + new Date().getTime();
      let index = event.index;
      if (typeof index === "undefined") {
        index = list.length;
      }
      list.splice(index, 0, event.data);
    }
  }

  removeField(i, displayOrder) {
    swal({
      title: 'Are you sure?',
      text: "Do you want to remove this field?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00B96F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove!'
    }).then((result) => {
      if (result.value) {
        this.pageDetail[displayOrder].splice(i, 1);
      }
    });

  }

  toggleValue(item) {
    item.selected = !item.selected;
  }

  savePage (page) {
    this.savePageEvent.emit();
  }

  mandatoryUpdated (i, name, apiName, pageType) {
    let count = 0;
    this.pageDetail.rightPanel.forEach((element, index) => {
      if (index === i) {
        element.className = 'green-border';
      }

      if (element.className === 'green-border') {
        count++;
      }
    });

    if (this.fieldNameApiMapping[pageType] === undefined) {
      this.fieldNameApiMapping[pageType] = {};
    } else {
      this.fieldNameApiMapping[pageType][name] = apiName;
      console.log(this.fieldNameApiMapping);
    }
    this.dataStoreService.updateApiNamesUsed(name, pageType, apiName);
    if (pageType === 'Custom') {
      this.applicationFields.forEach(element => {
        if (element.APIName === apiName) {
          element.apiUsed = true;
        }
      });
    } else if (pageType === 'List') {
      this.listFields.forEach(element => {
        if (element.APIName === apiName) {
          element.apiUsed = true;
        }
      });
    }
  }
}
