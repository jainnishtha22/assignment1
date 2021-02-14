import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postList;
  userId;
  constructor(
    private postService: PostService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.fetchPost();
  }

  fetchPost() {
    this.postService.get(`/posts?userId + ${this.userId}`+'&skip=0&limit=10').subscribe(
      res => {
        if(res){
          this.postList = res;
        }
      }
    )
  }

}
