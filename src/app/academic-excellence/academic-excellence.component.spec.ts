import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicExcellenceComponent } from './academic-excellence.component';

describe('AcademicExcellenceComponent', () => {
  let component: AcademicExcellenceComponent;
  let fixture: ComponentFixture<AcademicExcellenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicExcellenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicExcellenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
