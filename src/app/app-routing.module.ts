import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { AddComponentComponent } from './add-component/add-component.component';


const routes: Routes = [{
  path:'',
  component:EventListComponent
},{
  path:'event/details',
  component:EventListComponent
},{
  path:'event/add',
  component:AddComponentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
