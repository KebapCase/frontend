import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenInformationComponent } from './gen-information.component';

describe('GenInformationComponent', () => {
  let component: GenInformationComponent;
  let fixture: ComponentFixture<GenInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
