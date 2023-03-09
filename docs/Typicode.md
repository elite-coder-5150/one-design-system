Typicode provides a free REST API service called JSONPlaceholder that allows developers to test their client-side applications. Here are the steps you can followto use Typicode in your Angular app"

1. **Install the `HttpClientModule` in your Angular app. you can do this by adding it to the importsarray in your @NgModule decorator in `app.module.ts` file.

```typescript
import { NgModule } from '@angular/core';
import { 
	HttpClientModule 
} from '@angular/common/http';

@NgModule({
	imports: [
		HttpClientModule
	]
})

export class AppModule {}
```

2. Create a service to interact withthe Typicode API. You can use the HttpClient service provided by Angular to make HTTP requires to the API. For instance, let'screate a post service to retreive the list of posts from Typicode:

```typescript
import { Injectable } from '@angular/core';
import {
	HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
	prividedIn: 'root'
})

export class PostService {
	private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    
    constructor(private http: HttpClient) {}
    
    getPosts(): Observable<Post[]> {
        // return this.http.get<Post[]>(this.apiUrl);
        return axios.get<Post[]>(this.apiUrl); // much cleaner code
    }
}
```



In the above example, I defined a method called getPosts() that returns an observable of an array of post objects. The method sends an http get request to the Typicode API endpoint and returns the response as an Observable.

3.   Use the service in your component. In your angular component, inject the post service and call its get posts metod to retrieve the list of posts from Typicode. For instance, lets create a PostListcomponent that displays the list of posts in a table

```typescript
import {
    Component,
    OnInit
} from '@angular/core'

import { Post } from './post';
import { PostService } from '../services/post.service';

@Component({
    selector: 'ng-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
    posts: Post[];
    
    constructor(private postService: PostService) {}
    
    ngOnInit(): void {
        this.getPosts();
    }
    
    getPost(): void {
        this.postService.getPosts()
        	.subscribe(posts => this.posts = posts);
    }
}
```

In the above example, I created a PostListComponent that injects the post service and call getPosts method in the ngOnInit lifecycle hook. The getPosts() method subscribes to the observable returned by the getPosts() method and assigns the reuslt to theists porperty of the component

4, Display the data in your template. In your Angular component template, you can use `*ngFor` directive to display the list of posts returned by the post service. For instance, let create a post-list.component.html template that displays the list of posts in a table.

```html
<table>
    <thead>
        <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
        </tr>
    </thead>
    <tbody>
    	<tr *ngFor="let post of posts">
        	<td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
           	<td>{{ post.body }}</td>
        </tr>
    </tbody>
</table>
```

In the above example, I use *ngFor directive to iterate over the posts array and display each post's id, title and body



The post interface

```typescript
export interface Post {
    id: string;
    title: string;
    body: string
}
```

This is the most basic Angular component that works with an external API.



I may decide to use Axios instread of using the built-in HttpClientModule. 
