import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { CollectionComponent } from './collection/collection.component';
import { FooterComponent } from './footer/footer.component';
import { RecordComponent } from './record/record.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    CollectionComponent,
    FooterComponent,
    RecordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
