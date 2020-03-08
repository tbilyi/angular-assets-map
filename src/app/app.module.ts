import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrucksListComponent } from './trucks-list/trucks-list.component';
import { AgmCoreModule } from '@agm/core';
import { TruckAddComponent } from './trucks-list/truck-add/truck-add.component';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './trucks-list/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TrucksListComponent,
    TruckAddComponent,
    FilterPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    StoreModule.forRoot(fromApp.appReducer),
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
