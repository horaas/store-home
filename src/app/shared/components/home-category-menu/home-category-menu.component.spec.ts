import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCategoryMenuComponent } from './home-category-menu.component';

describe('HomeCategoryMenuComponent', () => {
  let component: HomeCategoryMenuComponent;
  let fixture: ComponentFixture<HomeCategoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCategoryMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
