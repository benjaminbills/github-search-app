import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubRepoComponent } from './github-repo/github-repo.component';
import { GithubUserComponent } from './github-user/github-user.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: 'user', component: GithubUserComponent },
  { path: 'repos', component: GithubRepoComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
