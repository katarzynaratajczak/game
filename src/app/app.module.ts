import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { ZwierzetaComponent } from './zwierzeta/zwierzeta.component';
import { OwoceComponent } from './owoce/owoce.component';
import { LiteryComponent } from './litery/litery.component';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import { PuzzleLogikaComponent } from './puzzle-logika/puzzle-logika.component';
import { ChooseComponent } from './choose/choose.component';
import { LiteryLogikaComponent } from './litery-logika/litery-logika.component';

@NgModule({
  declarations: [
    AppComponent,
    PuzzleComponent,
    ZwierzetaComponent,
    OwoceComponent,
    LiteryComponent,
    DialogComponent,
    PuzzleLogikaComponent,
    ChooseComponent,
    LiteryLogikaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
