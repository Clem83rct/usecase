import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportToFirebaseComponent } from './import/import.component';

const routes: Routes = [
  { path: 'import', component: ImportToFirebaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
