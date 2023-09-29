import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/Client/footer/footer.component';
import { HeaderComponent } from './shared/Client/header/header.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { HomeComponent } from './pages/Client/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SigninComponent } from './pages/Client/signin/signin.component';
import { SignupComponent } from './pages/Client/signup/signup.component';
import { ProductsComponent } from './components/products/products.component';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { TestimonialsComponent } from './pages/Client/testimonials/testimonials.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ListProductComponent,
    HomeComponent,
    BannerComponent,
    ProductDetailComponent,
    SigninComponent,
    SignupComponent,
    ProductsComponent,
    TestimonialsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InputTextModule,
    CarouselModule,
    TagModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
