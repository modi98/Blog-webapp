import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { CategoriesComponent } from './blog-post/categories/categories.component';
import { PostComponent } from './blog-post/post/post.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryPipe } from './pipes/category.pipe'
import { MatGridListModule } from '@angular/material/grid-list';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormAddPostComponent } from './blog-post/form-add-post/form-add-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentComponent } from './post-details/comment/comment.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormEditPostComponent } from './blog-post/post/form-edit-post/form-edit-post.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [
  { path: '', component: BlogPostComponent },
  { path: 'postDetails/:id', component: PostDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    CategoriesComponent,
    PostComponent,
    CategoryPipe,
    FormAddPostComponent,
    PostDetailsComponent,
    CommentComponent,
    FormEditPostComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonToggleModule,
    CommonModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
