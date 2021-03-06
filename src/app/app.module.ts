import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { ZwierzetaComponent } from './zwierzeta/zwierzeta.component';
import { OwoceComponent } from './owoce/owoce.component';
import { LiteryComponent } from './litery/litery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PuzzleLogikaComponent } from './puzzle-logika/puzzle-logika.component';
import { LiteryLogikaComponent } from './litery-logika/litery-logika.component';
import { UkladankaComponent } from './ukladanka/ukladanka.component';
import { UkladankaLogikaComponent } from './ukladanka-logika/ukladanka-logika.component';
import { StartComponent } from './start/start.component';
import { ZwierzetaLogikaComponent } from './zwierzeta-logika/zwierzeta-logika.component';
import { BajkaComponent } from './bajka/bajka.component';

@NgModule({
  declarations: [
    AppComponent,
    PuzzleComponent,
    ZwierzetaComponent,
    OwoceComponent,
    LiteryComponent,
    PuzzleLogikaComponent,
    LiteryLogikaComponent,
    UkladankaComponent,
    UkladankaLogikaComponent,
    StartComponent,
    ZwierzetaLogikaComponent,
    BajkaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
