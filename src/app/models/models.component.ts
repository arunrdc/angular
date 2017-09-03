import { Component, OnInit } from '@angular/core';
import { ModelDetail } from '../model';
import { ModelDetailServiceService } from '../model-detail-service.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@Component({
  selector: 'app-models',
  providers: [ModelDetailServiceService],
  template: `
 
  <h2>Models</h2>
  <table>
  <tr>
    <th>Model Name</th>
    <th>Description</th>
    <th>Status</th>
    <th>Algorithm</th>
    <th>Actions</th>
  </tr>
  <tr *ngFor="let model of models" [routerLink]="['/modeldetail', model.id]" 
  [class.selected]="model === selectedModel"
  (click)="onSelect(model)">
    <td>{{model.name}}</td>
    <td>{{model.desc}}</td>
    <td>{{model.status}}</td>
    <td>{{model.algorithm}}</td>
    <td> <i class="fa fa-pencil-square-o" aria-hidden="true"></i></td>
  </tr>
  
</table>  
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
