import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FamilyTreeService} from './family-tree.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatButtonModule, MatFormFieldModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FamilyTreeComponent } from './family-tree/family-tree.component';
import { ListToArrayPipe } from './common/pipes/list-to-array.pipe';
import { ControlPanelComponent } from './control-panel/control-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    FamilyTreeComponent,
    ListToArrayPipe,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    FamilyTreeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
