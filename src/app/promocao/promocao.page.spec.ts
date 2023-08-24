import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromocaoPage } from './promocao.page';

describe('PromocaoPage', () => {
  let component: PromocaoPage;
  let fixture: ComponentFixture<PromocaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PromocaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
