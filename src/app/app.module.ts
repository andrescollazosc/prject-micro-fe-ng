import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from './components/table/table.component';
import { ButtonModalComponent } from './components/button-modal/button-modal.component';

@NgModule({
  declarations: [
    TableComponent,
    ButtonModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { 

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const tableComponent = createCustomElement(TableComponent, {
      injector: this.injector
    });

    const buttonModalComponent = createCustomElement(ButtonModalComponent, {
      injector: this.injector
    });

    customElements.define('table-acc-amd', tableComponent);
    customElements.define('btn-modal-acc-amd', buttonModalComponent);
  }


}
