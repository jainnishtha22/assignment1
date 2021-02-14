import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../service/post.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postId;
  postData;
  comments;
  constructor(
    private postService: PostService,
    private route:ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
       this.postId = params['id'];
    });
    this.getDetails();
  }
 

  getDetails() {
    this.postService.get(`/posts/${this.postId}`).subscribe(
      res => {
        this.postData = res;
      }
    )
  }

  getComments() {
    if(this.comments)
    return;
    this.postService.get(`/posts/${this.postId}/comments`).subscribe(
      res => {
        if(res){
          this.comments = res;
        }
      }
    )
  }

  delete() {
    this.postService.delete(`/posts/${this.postId}`).subscribe(
      res => {
        if(res){
          this.location.back();
        }
      }
    )
  }

}
