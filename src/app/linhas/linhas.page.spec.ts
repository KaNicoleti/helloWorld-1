import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinhasPage } from './linhas.page';

describe('LinhasPage', () => {
  let component: LinhasPage;
  let fixture: ComponentFixture<LinhasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LinhasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
