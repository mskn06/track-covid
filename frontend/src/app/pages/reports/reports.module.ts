import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsPageRoutingModule } from './reports-routing.module';
import { ReportsPage } from './reports.page';

@NgModule({
  imports: [CommonModule, ReportsPageRoutingModule],
  declarations: [ReportsPage],
})
export class ReportsPageModule {}
