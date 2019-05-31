import { NgModule } from '@angular/core';

import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { AlertComponent } from './alert.component';

@NgModule({
  declarations: [AlertComponent],
  imports: [DynamicComponentLoaderModule.forChild(AlertComponent)]
})
export class AlertModule {}
