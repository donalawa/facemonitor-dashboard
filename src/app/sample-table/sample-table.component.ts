import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SampleTableDataSource } from './sample-table-datasource';
import { TableService } from './table.service'
import { Table } from './table'

@Component({
  selector: 'app-sample-table',
  templateUrl: './sample-table.component.html',
  styleUrls: ['./sample-table.component.css']
})
export class SampleTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Table>;
  dataSource: SampleTableDataSource;
  dataLength: number;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    // clienUserName: string
    
    // fullDate: string
    // reqMethd: string
    // resPonseObject: any
    // resStatus: number
    // resTime: string
    // time: string
    // url: string
    "clientIp",
    "reqMethd",
    "url",
    "resStatus",
    "resPonseObject",
    "reqtime",
    "restime",
    "fullDate",
   ];

  ngOnInit() {
    // setInterval(()=>{
      this.dataSource = new SampleTableDataSource(this.tableService);

    // },1000)  
  }

  refresh(){
    this.tableService.getRealtimeData().subscribe({
      next: (res:Table[]) => { this.dataSource.data = res; console.log("****  refreshed  ******") },
      error: res =>{ console.log('*************** An Error Occured *****************')},    
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  applyFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private tableService:TableService){
    
  }
}
