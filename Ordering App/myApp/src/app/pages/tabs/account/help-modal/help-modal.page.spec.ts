import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpModalPage } from './help-modal.page';

describe('HelpModalPage', () => {
  let component: HelpModalPage;
  let fixture: ComponentFixture<HelpModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
