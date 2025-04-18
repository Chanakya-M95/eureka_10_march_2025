import { Component, ViewEncapsulation } from '@angular/core';
import { ElectronicsComponent } from '../electronics/electronics.component';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { UserListComponent } from '../user-list/user-list.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { Demo1Component } from '../demo1/demo1.component';
import { UserTableComponent } from '../user-table/user-table.component';
import { PipesComponent } from '../pipes/pipes.component';
import { ParentComponent } from '../parent/parent.component';
import { TrafficLightComponent } from '../traffic-light/traffic-light.component';
import { Demo2Component } from '../demo2/demo2.component';
import { HttpDemo1Component } from '../http-demo1/http-demo1.component';
import { UserCrudHttpComponent } from '../user-crud-http/user-crud-http.component';
import { HttpDemo2Component } from '../http-demo2/http-demo2.component';
import { ObservableDemo1Component } from '../observable-demo1/observable-demo1.component';
import { ObservableDemo2Component } from '../observable-demo2/observable-demo2.component';
import { ObservableDemo3Component } from '../observable-demo3/observable-demo3.component';

@Component({
  selector: 'app-body',
  imports: [
    // ElectronicsComponent,
    // DataBindingComponent
    // DirectivesComponent,
    // MyModalComponent
    // UserListComponent
    // UserTableComponent
    // ProductListComponent
    // Demo1Component
    // PipesComponent,
    // TrafficLightComponent,
    // ParentComponent
    // Demo1Component,
    // Demo2Component
    // HttpDemo1Component,
    // HttpDemo2Component
    // UserCrudHttpComponent
    // ObservableDemo1Component
    // ObservableDemo2Component
    ObservableDemo3Component
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  // encapsulation: ViewEncapsulation.None
})
export class BodyComponent {
  flag: boolean = true;
}
