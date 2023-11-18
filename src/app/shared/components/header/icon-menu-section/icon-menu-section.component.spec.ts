import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMenuSectionComponent } from './icon-menu-section.component';

describe('IconMenuSectionComponent', () => {
  let component: IconMenuSectionComponent;
  let fixture: ComponentFixture<IconMenuSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconMenuSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconMenuSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
