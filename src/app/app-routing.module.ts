import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './comps/panels/homepage/homepage.component';
import { LoginComponent } from './comps/panels/login/login.component';
import { UsersComponent } from './comps/panels/users/users.component';
import { PostsComponent } from './comps/panels/posts/posts.component';
import { AlbumsComponent } from './comps/panels/albums/albums.component';
import { TodosComponent } from './comps/panels/todos/todos.component';
import { HeaderComponent } from './comps/panels/header/header.component';
import { NewFormComponent } from './form/new-form/new-form.component';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'users', component: UsersComponent,children :[
    { path: '', component: PostsComponent ,pathMatch:'full'},
    { path: 'posts', component: PostsComponent },
    { path: 'albums', component: AlbumsComponent },
    { path: 'todos', component: TodosComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
