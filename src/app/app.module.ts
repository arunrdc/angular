import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { ModelDetailComponent } from './model-detail/model-detail.component';
import { ModelsComponent } from './models/models.component';
import { RouterModule }   from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    ModelDetailComponent,
    ModelsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'models',
        component: ModelsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'modeldetail/:id',
        component: ModelDetailComponent
      },
    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

