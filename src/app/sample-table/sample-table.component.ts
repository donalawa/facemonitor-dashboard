import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableService } from './table.service'
import { Table } from './table'
import { AngularFirestore} from '@angular/fire/firestore'
import { DataSource } from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-sample-table',
  templateUrl: './sample-table.component.html',
  styleUrls: ['./sample-table.component.css']
})
export class SampleTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Table>;
  // dataSource: SampleTableDataSource;
  dataLength: number;
  searchKey: string
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
   dataSource: MatTableDataSource<any>;

   length;
 
  ngOnInit() {
    this.tableService.getTableData().subscribe(data => {
      // data = data.sort()
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

 
 

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  constructor(private tableService:TableService, private afs: AngularFirestore ){
    
  }
}

