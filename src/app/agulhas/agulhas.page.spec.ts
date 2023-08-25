import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgulhasPage } from './agulhas.page';

describe('AgulhasPage', () => {
  let component: AgulhasPage;
  let fixture: ComponentFixture<AgulhasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgulhasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
