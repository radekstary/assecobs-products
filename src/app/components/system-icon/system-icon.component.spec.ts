import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemIconComponent } from './system-icon.component';

describe('SystemIconComponent', () => {
  let component: SystemIconComponent;
  let fixture: ComponentFixture<SystemIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
