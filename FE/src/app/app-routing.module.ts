import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './shared/Client/footer/footer.component';
import { HeaderComponent } from './shared/Client/header/header.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/Client/home/home.component';
import { SigninComponent } from './pages/Client/signin/signin.component';
import { SignupComponent } from './pages/Client/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'products/:id', component: ProductDetailComponent },
  {
    path : 'footer',
    component : FooterComponent,
  },
  {
    path : 'header',
    component : HeaderComponent,
  },
  {
    path : 'signin',
    component : SigninComponent,
  },
  {
    path : 'signup',
    component : SignupComponent,
  },
  {
    path : 'cart',
    component : CartComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
