import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ViewComponent } from "./components/view/view.component";
import { Subject } from "rxjs";
import { takeUntil, tap, subscribeOn } from "rxjs/operators";
import { School } from "./models/school";
import { SchoolService } from "./services/school.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "school-client";
  unsubscribe: Subject<boolean> = new Subject<boolean>();
  schools: School[] = [];

  constructor(public dialog: MatDialog, private schoolService: SchoolService) {}

  ngOnInit(): void {
    this.getSchools();
  }

  ngOnDestroy(): void {
    this.unsubscribe.unsubscribe();
  }

  getSchools(): void {
    this.schoolService
      .getSchools()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((response) => {
        console.log("res", response);
        this.schools = response.schools;
      });
  }

  openNewSchoolDialog(): void {
    const dialogRef = this.dialog.open(ViewComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });

    dialogRef.componentInstance.saveSchool.subscribe((school: School) => {
      console.log("text", school);
      this.schoolService.addSchool(school).subscribe(
        () => {
          this.getSchools();
        },
        (err) => {
          console.log("error", err);
        }
      );
    });
  }
}
