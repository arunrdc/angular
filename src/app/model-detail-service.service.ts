import { Injectable } from '@angular/core';
import { ModelDetail } from './model';
import {modelDetails} from './mock-details'

@Injectable()
export class ModelDetailServiceService {

  constructor() { }
  getModelDetails(): Promise<ModelDetail[]> {
    return Promise.resolve(modelDetails);
  }
  getModelDetail(id: number): Promise<ModelDetail> {
    return this.getModelDetails()
               .then(modelDetails => modelDetails.find(modelDetail => modelDetail.id === id));
  }

   
}
