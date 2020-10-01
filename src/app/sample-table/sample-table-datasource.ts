import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Table } from './table';
import { TableService } from './table.service'


// TODO: Replace this with your own data model type
// export interface Table {
//  ip: number,
//  endpoint: number,
//  method: number,
//  response_status: number,
//  duration: number,
//  timestamp:string 
// }
// TODO: replace this with real data from your application
const EXAMPLE_DATA: Table[] = [
  {
    "ip": 93213415,
    "endpoint": 0,
    "method": 1,
    "response_status": 4,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 43772747,
    "endpoint": 0,
    "method": 0,
    "response_status": 4,
    "duration": 5,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 178598931,
    "endpoint": 0,
    "method": 1,
    "response_status": 4,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 163149761,
    "endpoint": 1,
    "method": 0,
    "response_status": 4,
    "duration": 5,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 47483923,
    "endpoint": 0,
    "method": 0,
    "response_status": 4,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 93009574,
    "endpoint": 1,
    "method": 1,
    "response_status": 0,
    "duration": 5,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 66877970,
    "endpoint": 0,
    "method": 1,
    "response_status": 4,
    "duration": 5,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 175416773,
    "endpoint": 1,
    "method": 1,
    "response_status": 0,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 57735474,
    "endpoint": 0,
    "method": 0,
    "response_status": 4,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 187010381,
    "endpoint": 0,
    "method": 1,
    "response_status": 4,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 188517080,
    "endpoint": 1,
    "method": 0,
    "response_status": 4,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 169881542,
    "endpoint": 0,
    "method": 0,
    "response_status": 0,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 186462433,
    "endpoint": 0,
    "method": 0,
    "response_status": 4,
    "duration": 5,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 194157620,
    "endpoint": 0,
    "method": 1,
    "response_status": 4,
    "duration": 5,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 120268080,
    "endpoint": 0,
    "method": 1,
    "response_status": 0,
    "duration": 5,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 88269549,
    "endpoint": 1,
    "method": 0,
    "response_status": 0,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 194267586,
    "endpoint": 1,
    "method": 0,
    "response_status": 0,
    "duration": 5,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 116540556,
    "endpoint": 1,
    "method": 1,
    "response_status": 4,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 173392785,
    "endpoint": 1,
    "method": 1,
    "response_status": 4,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 62386454,
    "endpoint": 0,
    "method": 1,
    "response_status": 0,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 132217040,
    "endpoint": 1,
    "method": 0,
    "response_status": 4,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 139297903,
    "endpoint": 1,
    "method": 1,
    "response_status": 4,
    "duration": 5,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 190375413,
    "endpoint": 0,
    "method": 1,
    "response_status": 0,
    "duration": 5,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 28238175,
    "endpoint": 0,
    "method": 0,
    "response_status": 0,
    "duration": 5,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 64268371,
    "endpoint": 0,
    "method": 0,
    "response_status": 4,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 12977612,
    "endpoint": 1,
    "method": 1,
    "response_status": 0,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 185467937,
    "endpoint": 1,
    "method": 0,
    "response_status": 4,
    "duration": 5,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 91812057,
    "endpoint": 1,
    "method": 1,
    "response_status": 0,
    "duration": 5,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 25710554,
    "endpoint": 0,
    "method": 0,
    "response_status": 0,
    "duration": 5,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 198857887,
    "endpoint": 1,
    "method": 1,
    "response_status": 0,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 184929075,
    "endpoint": 0,
    "method": 1,
    "response_status": 0,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 125024697,
    "endpoint": 0,
    "method": 0,
    "response_status": 0,
    "duration": 5,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 45408220,
    "endpoint": 0,
    "method": 1,
    "response_status": 4,
    "duration": 5,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 95957648,
    "endpoint": 0,
    "method": 0,
    "response_status": 4,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 9729738,
    "endpoint": 0,
    "method": 0,
    "response_status": 0,
    "duration": 5,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 98188305,
    "endpoint": 1,
    "method": 0,
    "response_status": 0,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 35031843,
    "endpoint": 1,
    "method": 0,
    "response_status": 0,
    "duration": 5,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 147351661,
    "endpoint": 1,
    "method": 0,
    "response_status": 4,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 106093176,
    "endpoint": 0,
    "method": 1,
    "response_status": 0,
    "duration": 5,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 146423090,
    "endpoint": 1,
    "method": 0,
    "response_status": 0,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 79622558,
    "endpoint": 0,
    "method": 1,
    "response_status": 0,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 50413775,
    "endpoint": 1,
    "method": 1,
    "response_status": 4,
    "duration": 5,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 172083817,
    "endpoint": 0,
    "method": 1,
    "response_status": 0,
    "duration": 5,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 126954403,
    "endpoint": 1,
    "method": 0,
    "response_status": 4,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 142071358,
    "endpoint": 1,
    "method": 0,
    "response_status": 0,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 32409342,
    "endpoint": 1,
    "method": 0,
    "response_status": 0,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 35538126,
    "endpoint": 1,
    "method": 1,
    "response_status": 4,
    "duration": 2,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 117261049,
    "endpoint": 0,
    "method": 1,
    "response_status": 4,
    "duration": 5,
    "timestamp": "1-10-2020"
  },
  {
    "ip": 114903390,
    "endpoint": 0,
    "method": 1,
    "response_status": 4,
    "duration": 5,
    "timestamp": "1-10-2020"
  }
];

/**
 * Data source for the SampleTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class SampleTableDataSource extends DataSource<Table> {
  data: Table[];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(private tableService:TableService) {
    super();

    this.tableService.getMonitorData().subscribe({
      next: data => {this.data = data;},
      error: error => console.log("An error occured in getting all the data"),
    })

    // console.log(this.tableService.getRealtimeData())
    this.tableService.getRealtimeData().subscribe({
      next: res => { console.log(`********** Recieved ${res} Data ***********`);console.log(res)},
      error: res =>{ console.log('*************** An Error Occured *****************')},
      
    })
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Table[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,  
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Table[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Table[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'method': return compare(a.method, b.method, isAsc);
        case 'response_status': return compare(+a.response_status, +b.response_status, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
