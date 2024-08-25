import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import {FormsModule} from "@angular/forms";
import { ProcessBarComponent } from './process-bar/process-bar.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { TwoWayBidingComponent } from './two-way-biding/two-way-biding.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    ProcessBarComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    TwoWayBidingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
