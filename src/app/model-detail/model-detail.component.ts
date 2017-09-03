import { Component, OnInit, Input } from '@angular/core';
import { ModelDetail } from '../model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { ModelDetailServiceService } from '../model-detail-service.service';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-model-detail',
  templateUrl: './model-detail.component.html',

  styleUrls: ['./model-detail.component.css']
})
export class ModelDetailComponent implements OnInit {
  modelDetail: ModelDetail
  
  constructor(
    private modelDetailsService: ModelDetailServiceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.modelDetailsService.getModelDetail(+params.get('id')))
      .subscribe(modelDetail => this.modelDetail = modelDetail);
  }
  goBack(): void {
    this.location.back();
  }
}
