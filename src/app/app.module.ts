import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubRepoComponent } from './github-repo/github-repo.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { GithubUserComponent } from './github-user/github-user.component';

@NgModule({
  declarations: [AppComponent, GithubSearchComponent, GithubRepoComponent, GithubUserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
