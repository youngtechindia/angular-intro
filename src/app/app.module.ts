import { NgModule, createComponent } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishComponent } from './wish/wish.component';
import { WishesComponent } from './wishes/wishes.component';
import { ServerComponent } from './server/server.component';
import { ItemslistComponent } from './itemslist/itemslist.component';
import { HeroComponent } from './hero/hero.component';
import { ElementcolorDirective } from './directives/elementcolor.directive';
import { SampleService } from './service/sample.sevice';
import { EmployeeComponent } from './employee/employee.component';
import { CreateComponent } from './employee/create/create.component';
import { ListComponent } from './employee/list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NopageComponent } from './nopage/nopage.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WishComponent,
  },
  {
    path: 'addEmployee',
    component: CreateComponent,
  },
  {
    path: 'listEmployee/:id',
    component: ListComponent,
  },
  {
    path: '**',
    component: NopageComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    WishComponent,
    WishesComponent,
    ServerComponent,
    ItemslistComponent,
    HeroComponent,
    ElementcolorDirective,
    EmployeeComponent,
    CreateComponent,
    ListComponent,
    NavbarComponent,
    NopageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
