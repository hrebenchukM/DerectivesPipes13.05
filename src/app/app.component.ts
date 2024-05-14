import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink, RouterLinkActive} from '@angular/router';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[RouterOutlet,RouterLink, RouterLinkActive,TaskComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'syntax';
}
