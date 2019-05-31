import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {
  DynamicComponentLoaderModule,
  DynamicComponentManifest
} from './dynamic-component-loader/dynamic-component-loader.module';

// This array defines which "componentId" maps to which lazy-loaded module.
const manifests: DynamicComponentManifest[] = [
  {
    componentId: 'message',
    path: 'dynamic-message', // some globally-unique identifier, used internally by the router
    loadChildren: './dynamic-modules/message/message.module#MessageModule'
  },
  {
    componentId: 'alert',
    path: 'dynamic-alert', // some globally-unique identifier, used internally by the router
    loadChildren: './dynamic-modules/alert/alert.module#AlertModule'
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    MatDialogModule,
    NoopAnimationsModule,

    DynamicComponentLoaderModule.forRoot(manifests)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}
