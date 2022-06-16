import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntersampleComponent } from './entersample.component';

describe('EntersampleComponent', () => {
  let component: EntersampleComponent;
  let fixture: ComponentFixture<EntersampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntersampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntersampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
