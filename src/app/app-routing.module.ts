import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: "full"
  },
  {
    path: 'detail',
    component: DetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatCarouselModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
