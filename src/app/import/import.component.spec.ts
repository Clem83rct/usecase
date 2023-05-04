import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportToFirebaseComponent } from './import.component';

describe('ImportToFirebaseComponent', () => {
  let component: ImportToFirebaseComponent;
  let fixture: ComponentFixture<ImportToFirebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportToFirebaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportToFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
