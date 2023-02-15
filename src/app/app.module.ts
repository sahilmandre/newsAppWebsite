import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
import { HttpClientModule } from '@angular/common/http';
import { NewapiserviceService } from './service/newapiservice.service';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadlinesComponent,
    TechNewsComponent,
    EntertainmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
  ],
  providers: [NewapiserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
