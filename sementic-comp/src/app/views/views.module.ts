import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewHomeComponent } from './view-home/view-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ItemsComponent } from './items/items.component';


@NgModule({
  declarations: [ViewHomeComponent, StatisticsComponent, ItemsComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
