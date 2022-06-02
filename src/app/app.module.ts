import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { boardService } from './board.service';
//import { StateService } from './state.service';
import { TileComponent } from './tile.component';

@NgModule({
  declarations: [
    AppComponent,TileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [boardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
