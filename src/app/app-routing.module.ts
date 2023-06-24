import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LetsTalkComponent } from './lets-talk/lets-talk.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { PositionComponent } from './position/position.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'lets-talk', component: LetsTalkComponent },
  { path: 'position', component: PositionComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
