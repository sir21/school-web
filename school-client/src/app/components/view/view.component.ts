import { Component, OnInit, Inject, Output, EventEmitter } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { School } from 'src/app/models/school';
import { Address } from 'src/app/models/address';

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"],
})
export class ViewComponent implements OnInit {
  @Output() saveSchool: EventEmitter<School>  = new EventEmitter();
  schoolForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ViewComponent>
    ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.schoolForm = new FormGroup({
      name: new FormControl("", Validators.required),
      street: new FormControl(""),
      suburb: new FormControl(""),
      postCode: new FormControl(null),
      state: new FormControl(""),
      numberOfStudents: new FormControl(null),
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.schoolForm.invalid) {
      return;
    }
    const formData = this.schoolForm.value;
    console.log('data', formData);
    const school: School = {
      id: null,
      name: formData.name,
      address: {
        street: formData.street,
        suburb: formData.suburb,
        postCode: formData.postCode,
        state: formData.state
      } as Address,
      numberOfStudents: formData.numberOfStudents
    }
    console.log('school', school);
    this.saveSchool.emit(school);
    this.onClose();
  }
}
