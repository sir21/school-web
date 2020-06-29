import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableHarness } from '@angular/material/table/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

import { ListComponent } from './list.component';
import { School } from 'src/app/models/school';
import { HarnessLoader } from '@angular/cdk/testing';
import { By } from '@angular/platform-browser';

export const school = {
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

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let loader: HarnessLoader;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
