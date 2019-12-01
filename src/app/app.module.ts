import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UserComponent } from './comps/items/user/user.component';
import { PostComponent } from './comps/items/post/post.component';
import { AlbumComponent } from './comps/items/album/album.component';
import { TodoComponent } from './comps/items/todo/todo.component';
import { CommentComponent } from './comps/items/comment/comment.component';
import { PhotoComponent } from './comps/items/photo/photo.component';
import { PhotosComponent } from './comps/panels/photos/photos.component';
import { CommentsComponent } from './comps/panels/comments/comments.component';
import { TodosComponent } from './comps/panels/todos/todos.component';
import { AlbumsComponent } from './comps/panels/albums/albums.component';
import { PostsComponent } from './comps/panels/posts/posts.component';
import { UsersComponent } from './comps/panels/users/users.component';
import { HomepageComponent } from './comps/panels/homepage/homepage.component';
import { LoginComponent } from './comps/panels/login/login.component';
import { HeaderComponent } from './comps/panels/header/header.component';
import { NewFormComponent } from './form/new-form/new-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    AlbumComponent,
    TodoComponent,
    CommentComponent,
    PhotoComponent,
    PhotosComponent,
    CommentsComponent,
    TodosComponent,
    AlbumsComponent,
    PostsComponent,
    UsersComponent,
    HomepageComponent,
    LoginComponent,
    HeaderComponent,
    NewFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
