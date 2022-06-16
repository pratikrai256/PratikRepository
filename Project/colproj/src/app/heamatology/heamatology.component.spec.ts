import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeamatologyComponent } from './heamatology.component';

describe('HeamatologyComponent', () => {
  let component: HeamatologyComponent;
  let fixture: ComponentFixture<HeamatologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeamatologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeamatologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
