import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { SchoolService } from './school.service';
import { environment } from 'src/environments/environment';
import { School } from '../models/school';
import { Address } from 'cluster';

describe('SchoolService', () => {
  let service: SchoolService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SchoolService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get list of schools', () => {
    service.getSchools().subscribe(() => {});
    const req = httpMock.expectOne(`${environment.api}/school`);
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('should save a schools', () => {
    const school = {
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
    service.addSchool(school).subscribe(() => {});
    const req = httpMock.expectOne(`${environment.api}/school`);
    expect(req.request.method).toBe('POST');
    req.flush([]);
  });
});
