import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  post: {
    userName: string,
    message: string,
    createdDate: any
  }
  message: string;

  posts: {userName: string, message: string, createdDate: any}[]
    = [
    {
      userName: 'Taro Yamada',
      message: 'This is test message.',
      createdDate: '10分前'
    },
    {
      userName: 'Taro Yamada',
      message: 'This is second message.',
      createdDate: '10分前'
    }
  ];

  addPost(){
    this.post = {
      userName: 'XXX YYYY',
      message: this.message,
      createdDate: '数秒前'
    };
    this.posts.push(this.post);
    this.message = ";"
  }

}
