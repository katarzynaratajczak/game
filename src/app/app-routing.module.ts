import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiteryComponent } from './litery/litery.component';
import { OwoceComponent } from './owoce/owoce.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { ZwierzetaComponent } from './zwierzeta/zwierzeta.component';


const routes: Routes = [
  {path: 'litery', component: LiteryComponent},
  {path: 'owoce', component: OwoceComponent},
  {path: 'puzzle', component: PuzzleComponent},
  {path: 'zwierzeta', component: ZwierzetaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
