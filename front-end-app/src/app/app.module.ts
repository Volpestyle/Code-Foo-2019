import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarItemComponent } from './components/navbar-item/navbar-item.component';
import { ContentItemComponent } from './components/content-item/content-item.component';
import { ContentComponent } from './components/content/content.component';
import { RemoveHost } from './directives/remove-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent,
    ContentItemComponent,
    ContentComponent,
    RemoveHost,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
