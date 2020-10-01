import { Component,OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Summary } from '../mini-card/summary';
import { SummaryService } from '../mini-card/summary.service';
import { ServerHealthService } from './server-health.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  miniCardData: Summary[];
  serverRunning = false
  ngOnInit(){
    this.summaryService.getStoreSummary().subscribe({
      next: summaryData => {
        this.miniCardData = summaryData;
      }
    });

    setInterval(() =>{
       this.serverHealth.checkSeverHealth()
    .subscribe({
      next:res => this.serverRunning = false,
      error:res =>this.serverRunning = true
    })}, 3000)
   

  }
  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }
 
     return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private summaryService: SummaryService,private serverHealth:ServerHealthService) {}

 
}
