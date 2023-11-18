import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedRoutingModule } from './shared-routing.module';
import { HomeCategoryMenuComponent } from './components/home-category-menu/home-category-menu.component';
import { SlideComponent } from './components/slide/slide.component';
import { LoginSectionComponent } from './components/header/login-section/login-section.component';
import { CartSectionComponent } from './components/header/cart-section/cart-section.component';
import { SearchSectionComponent } from './components/header/search-section/search-section.component';
import { IconMenuSectionComponent } from './components/header/icon-menu-section/icon-menu-section.component';

const sharedComponents = [
  HeaderComponent,
  FooterComponent,
  HomeCategoryMenuComponent,
  SlideComponent
];

@NgModule({
  declarations: [
    ...sharedComponents,
    LoginSectionComponent,
    CartSectionComponent,
    SearchSectionComponent,
    IconMenuSectionComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    ...sharedComponents,
  ]
})
export class SharedModule { }
