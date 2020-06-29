import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'

import { SchoolService } from '../../services/school.service'
import { School } from 'src/app/models/school';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input('schools') set setSchools(schools: School[]) {
    this.dataSource.data = [];
    schools.forEach((school: School) => {
      this.dataSource.data.push(school);
      this.dataSource._updateChangeSubscription();
    });
    this.setFilter();
  }
  data: School[] = []
  displayedColumns: string[] = ['name', 'address', 'numberOfStudents'];
  dataSource =  new MatTableDataSource<School>(this.data);
  unsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  // Filter by name and address
  setFilter() {
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter) || JSON.stringify(data.address).toLowerCase().includes(filter);
    };
  }

  // enter filter key stroke
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
