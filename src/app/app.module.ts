import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
import { HttpClientModule } from '@angular/common/http';
import { NewapiserviceService } from './service/newapiservice.service';

@NgModule({
  declarations: [AppComponent, TopHeadlinesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [NewapiserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
