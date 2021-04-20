import { Component, OnInit } from '@angular/core';
import { DndDropEvent,DropEffect} from 'ngx-drag-drop';
import { field, value } from '../global.model';
import swal from 'sweetalert2';
import {DataStoreService} from '../data-store.service';
import { studentOnlineApplicationFields, studentOnlineApplicationListFields } from '../../environments/environment';

@Component({
  selector: 'app-page-config',
  templateUrl: './page-config.component.html',
  styleUrls: ['./page-config.component.css']
})
export class PageConfigComponent implements OnInit {

  applicationFields = studentOnlineApplicationFields;
  listFields = studentOnlineApplicationListFields;
  value:value={
    label:"",
    value:""
  };
  success = false;

  fieldModels:Array<field>=[
    {
      "apiName": "",
      "notes": "",
      "type": "text",
      "icon": "fa-font",
      "label": "Text",
      "description": "Enter your name",
      "placeholder": "Enter your name",
      "className": "form-control",
      "subtype": "text",
      "regex" : "",
      "handle":true
    },
    {
      "apiName": "",
      "notes": "",
      "type": "email",
      "icon": "fa-envelope",
      "required": true,
      "label": "Email",
      "description": "Enter your email",
      "placeholder": "Enter your email",
      "className": "form-control",
      "subtype": "text",
      "regex" : "^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$",
      "errorText": "Please enter a valid email",
      "handle":true
    },
    {
      "apiName": "",
      "notes": "",
      "type": "phone",
      "icon": "fa-phone",
      "label": "Phone",
      "description": "Enter your phone",
      "placeholder": "Enter your phone",
      "className": "form-control",
      "subtype": "text",
      "regex" : "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
      "errorText": "Please enter a valid phone number",
      "handle":true
    },
    {
      "apiName": "",
      "notes": "",
      "type": "number",
      "label": "Number",
      "icon": "fa-html5",
      "description": "Age",
      "placeholder": "Enter your age",
      "className": "form-control",
      "value": "20",
      "min": 12,
      "max": 90
    },
    {
      "apiName": "",
      "notes": "",
      "type": "date",
      "icon":"fa-calendar",
      "label": "Date",
      "placeholder": "Date",
      "className": "form-control"
    },
    {
      "apiName": "",
      "notes": "",
      "type": "textarea",
      "icon":"fa-text-width",
      "label": "Textarea" 
    },
    {
      "apiName": "",
      "notes": "",
      "type": "paragraph",
      "icon": "fa-paragraph",
      "label": "Paragraph",
      "placeholder": "Type your text to display here only" 
    },
    {
      "apiName": "",
      "notes": "",
      "type": "checkbox",
      "required": true,
      "label": "Checkbox",
      "icon":"fa-list",
      "description": "Checkbox",
      "inline": true,
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
      "type": "radio",
      "icon":"fa-list-ul",
      "label": "Radio",
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
      "icon":"fa-bars",
      "label": "Select",
      "description": "Select",
      "placeholder": "Select",
      "className": "form-control",
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
      "icon":"fa-file",
      "label": "File Upload",
      "className": "form-control",
      "subtype": "file"
    }
  ];

  leftPanelModelFields:Array<field>=[];
  rightPanelModelFields:Array<field>=[];
  model:any = {
    name:'',
    pageType:'',
    pageOrder: '',
    minTime: '',
    maxTime: '',
    leftPanel: this.leftPanelModelFields,
    rightPanel: this.rightPanelModelFields
  };

  pageTypes = [
    'Custom',
    'List',
    'Statement',
    'References'
  ]

  constructor(private dataStoreService: DataStoreService) { }

  ngOnInit() {
  }

  onDragStart(event:DragEvent) {
    console.log("drag started", JSON.stringify(event, null, 2));
  }
  
  onDragEnd(event:DragEvent) {
    console.log("drag ended", JSON.stringify(event, null, 2));
  }
  
  onDraggableCopied(event:DragEvent) {
    console.log("draggable copied", JSON.stringify(event, null, 2));
  }
  
  onDraggableLinked(event:DragEvent) {
    console.log("draggable linked", JSON.stringify(event, null, 2));
  }
    
   onDragged( item:any, list:any[], effect:DropEffect ) {
    if( effect === "move" ) {
      const index = list.indexOf( item );
      list.splice( index, 1 );
    }
  }
      
  onDragCanceled(event:DragEvent) {
    console.log("drag cancelled", JSON.stringify(event, null, 2));
  }
  
  onDragover(event:DragEvent) {
    console.log("dragover", JSON.stringify(event, null, 2));
  }
  
  onDrop( event:DndDropEvent, list?:any[] ) {
    if( list && (event.dropEffect === "copy" || event.dropEffect === "move") ) {
      
      if(event.dropEffect === "copy")
      event.data.name = event.data.type+'-'+new Date().getTime();
      let index = event.index;
      if( typeof index === "undefined" ) {
        index = list.length;
      }
      list.splice( index, 0, event.data );
    }
  }

  removeField(i, displayOrder){
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
        this.model[displayOrder].splice(i,1);
      }
    });

  }

  toggleValue(item){
    item.selected = !item.selected;
  }

  savePage (page) {
    let pageConfig:any = {};
    pageConfig.name = page.name;
    pageConfig.pageType = page.pageType;
    pageConfig.pageOrder = page.pageOrder;
    pageConfig.minTime = page.minTime;
    pageConfig.maxTime = page.maxTime;
    this.dataStoreService.addToPageCongifgs(pageConfig);

    let fieldConfig:any = {};
    page.leftPanel.forEach(element => {
      fieldConfig.name = element.name;
      fieldConfig.label = element.label;
      fieldConfig.regex = element.regex;
      fieldConfig.notes = element.notes;
      fieldConfig.apiName = element.apiName;
      fieldConfig.displayOrder = 'Left Panel';
      this.dataStoreService.addToFieldCongifgs(fieldConfig);
      fieldConfig = {};
    });

    page.rightPanel.forEach(element => {
      fieldConfig.name = element.name;
      fieldConfig.label = element.label;
      fieldConfig.regex = element.regex;
      fieldConfig.notes = element.notes;
      fieldConfig.apiName = element.apiName;
      fieldConfig.displayOrder = 'Right Panel';
      this.dataStoreService.addToFieldCongifgs(fieldConfig);
      fieldConfig = {};
    });
  }
}
