import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';

const routes: Routes = [{ path: '', component: TopHeadlinesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
