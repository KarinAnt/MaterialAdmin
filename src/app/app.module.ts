import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon'
<<<<<<< HEAD
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
=======
>>>>>>> 67047d47cb4ee2499731344f1de13167f8fb01b8

import { AppComponent } from './app.component';
import { SidenavAutosizeComponent } from './sidenav-autosize/sidenav-autosize.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeinComponent } from './mein/mein.component';
import { DownloadComponent } from './download/download.component';
import { SectionComponent } from './section/section.component';
import { AsideComponent } from './aside/aside.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { GrafComponent } from './graf/graf.component';
import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import { SectionFormsComponent } from './section-forms/section-forms.component';
import { SwitchComponent } from './switch/switch.component';
import { SelectMenuComponent } from './select-menu/select-menu.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
=======
>>>>>>> 67047d47cb4ee2499731344f1de13167f8fb01b8

@NgModule({
  declarations: [
    AppComponent,
    SidenavAutosizeComponent,
    MeinComponent,
    DownloadComponent,
    SectionComponent,
    AsideComponent,
    MenuComponent,
    UserComponent,
    GrafComponent,
    TableComponent,
    FooterComponent,
<<<<<<< HEAD
    SectionFormsComponent,
    SwitchComponent,
    SelectMenuComponent,
    TextFieldComponent,
    CheckboxComponent,
    RadioComponent,
=======
>>>>>>> 67047d47cb4ee2499731344f1de13167f8fb01b8
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
<<<<<<< HEAD
    MatIconModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule
=======
    MatIconModule
>>>>>>> 67047d47cb4ee2499731344f1de13167f8fb01b8
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
