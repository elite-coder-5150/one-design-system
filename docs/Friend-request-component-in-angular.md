```shell
ng g c friend-request
```



```typescript
export interface FriendRequest {
    sender: string;
    receiver: string;
    type: string;
    message string;
}
```



```typescript
import { Component } from '@angular/core'

@Component({
    selector: 'ng-friend-request',
    templateUrl: './friend-request.component.html',
    styleUrls: ['./friend-request.component.scss']
})
export class FriendRequestComponent {
  requests: FriendRequest[] = [
    { name: 'John Doe', message: 'Hey, want to be friends?' },
    { name: 'Jane Smith', message: 'Can we connect on social media?' }
  ];
}
```

```html
<h2>Friend Requests</h2>
<ul>
  <li *ngFor="let request of requests">
    <div class="name">{{ request.name }}</div>
    <div class="message">{{ request.message }}</div>
    <button class="accept">Accept</button>
    <button class="decline">Decline</button>
  </li>
</ul>

```

```scss
li {
  margin-bottom: 1rem;
}

.name {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.message {
  margin-bottom: 0.5rem;
}

button {
  margin-right: 1rem;
}

```

