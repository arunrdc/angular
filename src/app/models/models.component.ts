import { Component, OnInit } from '@angular/core';
import { ModelDetail } from '../model';
import { ModelDetailServiceService } from '../model-detail-service.service';

@Component({
  selector: 'app-models',
  providers: [ModelDetailServiceService],
  template: `
 
  <h2>Models</h2>
  <ul>
    <li *ngFor="let model of models" [routerLink]="['/modeldetail', model.id]" 
      [class.selected]="model === selectedModel"
      (click)="onSelect(model)">
      <span>{{model.id}}</span> {{model.name}}
    </li>
  </ul>
 
  `,
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  
  models: ModelDetail[];
  selectedModel: ModelDetail;

  constructor(private modelDetailsService: ModelDetailServiceService) { }

  onSelect(model: ModelDetail): void {
    this.selectedModel = model;
  }
  getModelDetails(): void {
    this.modelDetailsService.getModelDetails().then(models => this.models = models);
  }

  ngOnInit(): void {
    this.getModelDetails();
  }

}
