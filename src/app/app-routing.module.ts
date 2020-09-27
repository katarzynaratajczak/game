import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiteryLogikaComponent} from './litery-logika/litery-logika.component';
import { OwoceComponent } from './owoce/owoce.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { UkladankaLogikaComponent } from './ukladanka-logika/ukladanka-logika.component';
import { UkladankaComponent } from './ukladanka/ukladanka.component';
import { ZwierzetaComponent } from './zwierzeta/zwierzeta.component';


const routes: Routes = [
  {path: 'litery-logika', component: LiteryLogikaComponent},
  {path: 'owoce', component: OwoceComponent},
  {path: 'puzzle', component: PuzzleComponent},
  {path: 'zwierzeta', component: ZwierzetaComponent},
  {path: 'ukladanka', component: UkladankaLogikaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
