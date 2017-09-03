import { Component } from '@angular/core';
import { ModelDetail } from './model';
import { ModelDetailServiceService } from './model-detail-service.service';
@Component({
  selector: 'app-root',
  providers: [ModelDetailServiceService],
  template: `
 
  
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactML';
  
}





