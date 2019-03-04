import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { RemoveHost } from './directives/remove-host.directive'; //To make transferring style sheets easier
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; //Bootstrap without JQuery
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimeagoModule } from 'ngx-timeago';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarItemComponent } from './components/navbar-item/navbar-item.component';
import { ContentItemComponent } from './components/content-item/content-item.component';
import { ContentComponent } from './components/content/content.component';
import { FormatDurationPipe } from './pipes/format-duration.pipe';
import { FilterContentService } from './services/filter-content.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent,
    ContentItemComponent,
    ContentComponent,
    RemoveHost,
    FormatDurationPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgbModule,
    TimeagoModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [FilterContentService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  


}
