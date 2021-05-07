import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {AboutComponent} from './about/about.component';
import {ServicePageComponent} from './service-page/service-page.component';
import {ContactComponent} from './contact/contact.component';
import {BusinessAndManagementComponent} from './list/business-and-management/business-and-management.component';
import {ProjectManagementComponent} from './list/project-management/project-management.component';
import {EnvironmentalComponent} from './list/environmental/environmental.component';
import {BusinessAndProfessionalManagementComponent} from './list/business-and-professional-management/business-and-professional-management.component';



const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomepageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicePageComponent},
  {path: 'service',
    children: [
      {path: 'business-management', component: BusinessAndManagementComponent},
      {path: 'project-management', component: ProjectManagementComponent},
      {path: 'environment', component: EnvironmentalComponent},
      {path: 'business-professional-management', component: BusinessAndProfessionalManagementComponent}
    ]
  },
  {path: 'contact-us', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
