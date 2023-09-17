import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/Client/footer/footer.component';
import { HeaderComponent } from './shared/Client/header/header.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { HomeComponent } from './pages/Client/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ListProductComponent,
    HomeComponent,
    BannerComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
