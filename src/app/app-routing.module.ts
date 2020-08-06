import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiteryLogikaComponent} from './litery-logika/litery-logika.component';
import { OwoceComponent } from './owoce/owoce.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { ZwierzetaComponent } from './zwierzeta/zwierzeta.component';
import { ChooseComponent } from './choose/choose.component';

const routes: Routes = [
  {path: 'litery-logika', component: LiteryLogikaComponent},
  {path: 'owoce', component: OwoceComponent},
  {path: 'puzzle', component: PuzzleComponent},
  {path: 'zwierzeta', component: ZwierzetaComponent},
  {path: 'choose', component: ChooseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
