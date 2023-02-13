import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';

const routes: Routes = [
  { path: '', component: TopHeadlinesComponent },
  // create routing for TechNewsComponent
  { path: 'tech-news', component: TechNewsComponent },
  // create routing for Entertainement component
  { path: 'entertainment', component: EntertainmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
