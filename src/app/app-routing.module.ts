import { BajkaComponent } from './bajka/bajka.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiteryLogikaComponent } from './litery-logika/litery-logika.component';
import { OwoceComponent } from './owoce/owoce.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { StartComponent } from './start/start.component';
import { UkladankaLogikaComponent } from './ukladanka-logika/ukladanka-logika.component';
import { ZwierzetaLogikaComponent } from './zwierzeta-logika/zwierzeta-logika.component';



const routes: Routes = [
  { path: 'litery-logika', component: LiteryLogikaComponent },
  { path: 'owoce', component: OwoceComponent },
  { path: 'puzzle', component: PuzzleComponent },
  { path: 'zwierzeta-logika', component: ZwierzetaLogikaComponent },
  { path: 'ukladanka', component: UkladankaLogikaComponent },
  { path: 'start', component: StartComponent },
  { path: 'bajka', component: BajkaComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
