just like the HttpClient code the only thing that changed was

1.   Install Axios package in your Angular app. you can do this by running the following command in your terminal

```shell
npm install axios --save
```



```typescript
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor() { }

  getPosts(): Observable<Post[]> {
    return axios.get<Post[]>(this.apiUrl);
  }
}
```



The template and the logic for this component is the same as in [Typicode](./Typicode.md) example.