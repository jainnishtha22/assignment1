import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';

const routes: Routes = [
  {
    path:'view',
    component: PostComponent
  },
  {
    path: 'detail',
    component: PostDetailComponent
  }
]

@NgModule({
  declarations: [PostDetailComponent,PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PostModule { }
