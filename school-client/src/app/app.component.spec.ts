import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';

import { AppComponent } from './app.component';
import { School } from './models/school';
import { Component } from '@angular/core';
import { SchoolService } from './services/school.service';

export const school: School = {
  id: 'test',
  name: 'Test',
  address: {
    street: 'test',
    state: 'test',
    suburb: 'test',
    postCode: 10
  },
  numberOfStudents: 10
} as School;

export class MockSchoolService {
  getSchools(): Observable<School[]> {
    console.log(school);
    return of([school]);
  }

  addSchool(): Observable<string> {
    return of('School added');
  }
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        MatDialogModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: SchoolService,
          useClass: MockSchoolService
        }
      ]
    }).compileComponents();

    dialog = TestBed.inject(MatDialog);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'school-client'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('school-client');
  });
});
