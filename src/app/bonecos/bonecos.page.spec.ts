import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BonecosPage } from './bonecos.page';

describe('BonecosPage', () => {
  let component: BonecosPage;
  let fixture: ComponentFixture<BonecosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BonecosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
