import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientsFormComponent } from './pacients-form.component';

describe('PacientsFormComponent', () => {
  let component: PacientsFormComponent;
  let fixture: ComponentFixture<PacientsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
