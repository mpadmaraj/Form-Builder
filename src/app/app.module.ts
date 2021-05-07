import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditAppComponent } from './edit-app/edit-app.component';
import { DndModule } from 'ngx-drag-drop';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { PageConfigComponent } from './page-config/page-config.component';
import { AllPageConfigsComponent } from './all-page-configs/all-page-configs.component';
import { ModalComponent } from './modal/modal.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { PreviewPagesComponent } from './preview-pages/preview-pages.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const appRoutes: Routes = [
  { path: '', component: AllPageConfigsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EditAppComponent,
    PageConfigComponent,
    AllPageConfigsComponent,
    ModalComponent,
    PageDetailComponent,
    PreviewPagesComponent,
    FileUploadComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    SweetAlert2Module.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DndModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
