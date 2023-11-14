import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrandComponent } from './header/brand/brand.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './header/search/search.component';
import { SliderComponent } from './slider/slider.component';
import { BannerCategoryComponent } from './banner-category/banner-category.component';
import { TodayTopProductsComponent } from './today-top-products/today-top-products.component';
import { FeaturedBannerComponent } from './featured-banner/featured-banner.component';
import { LastViewedComponent } from './last-viewed/last-viewed.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrandComponent,
    HomeComponent,
    SearchComponent,
    SliderComponent,
    BannerCategoryComponent,
    TodayTopProductsComponent,
    FeaturedBannerComponent,
    LastViewedComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
