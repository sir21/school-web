import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit open dialog when add new school clicked', () => {
    spyOn(component.openNewSchoolDialogEmit, 'emit');
    const headerText = fixture.debugElement.query(By.css('.add')).nativeElement;
    headerText.click();
    fixture.detectChanges();
    expect(component.openNewSchoolDialogEmit.emit).toHaveBeenCalled();
  });
});
