import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinesFormComponent } from './vaccines-form.component';

describe('VaccinesFormComponent', () => {
  let component: VaccinesFormComponent;
  let fixture: ComponentFixture<VaccinesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
