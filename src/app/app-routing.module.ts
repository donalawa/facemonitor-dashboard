import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { LogComponent } from './log/log.component';
import { MonitorComponent } from './monitor/monitor.component';

// const routes: Routes = [{ path: 'dashboard', component: DashComponent }];


const routes: Routes = [
  { path: 'dashboard', component: DashComponent },
  { path: 'Logs', component: LogComponent },
  { path: 'Monitor', component: MonitorComponent },
  { path: 'Monitor', component: MonitorComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
