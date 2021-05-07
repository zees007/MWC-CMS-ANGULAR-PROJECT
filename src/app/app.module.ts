import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ErrorMsgDTService} from '../shared/services/error-msg-dt.service';
import { ErrorMsgDTComponent } from './error-msg-dt/error-msg-dt.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './homepage/slider/slider.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import { MainFeaturesComponent } from './homepage/main-features/main-features.component';
import { ServicesComponent } from './homepage/services/services.component';
import { AboutComponent } from './about/about.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { BusinessAndManagementComponent } from './list/business-and-management/business-and-management.component';
import { ProjectManagementComponent } from './list/project-management/project-management.component';
import { EnvironmentalComponent } from './list/environmental/environmental.component';
import { BusinessAndProfessionalManagementComponent } from './list/business-and-professional-management/business-and-professional-management.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ROUTES} from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    ErrorMsgDTComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    SliderComponent,
    MainFeaturesComponent,
    ServicesComponent,
    AboutComponent,
    ServicePageComponent,
    ContactComponent,
    BusinessAndManagementComponent,
    ProjectManagementComponent,
    EnvironmentalComponent,
    BusinessAndProfessionalManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
