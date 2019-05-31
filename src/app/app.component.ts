import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DynamicComponentLoader } from './dynamic-component-loader/dynamic-component-loader.service';
import { MessageComponent } from './dynamic-modules/message/message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('dynamicOutlet', { read: ViewContainerRef })
  testOutlet: ViewContainerRef | undefined;

  constructor(
    private dynamicComponentLoader: DynamicComponentLoader,
    private dialog: MatDialog
  ) {}

private loadDynamicComponent(componentId: string) {
  this.dynamicComponentLoader
  .getComponentFactory<MessageComponent>(componentId)
  .subscribe({
    next: componentFactory => {
      if (!this.testOutlet) {
        return;
      }

      const ref = this.testOutlet.createComponent(componentFactory);
      ref.changeDetectorRef.detectChanges();
    },
    error: err => {
      console.warn(err);
    }
  });
}

  loadComponent() {
    this.loadDynamicComponent('message')
  }

  loadAlert() {
    this.loadDynamicComponent('alert')
  }
}
