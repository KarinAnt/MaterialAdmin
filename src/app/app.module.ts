import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { SidenavAutosizeComponent } from './sidenav-autosize/sidenav-autosize.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeinComponent } from './mein/mein.component';
import { DownloadComponent } from './download/download.component';
import { SectionComponent } from './section/section.component';
import { AsideComponent } from './aside/aside.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavAutosizeComponent,
    MeinComponent,
    DownloadComponent,
    SectionComponent,
    AsideComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
