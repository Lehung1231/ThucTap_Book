import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './shared/Client/footer/footer.component';
import { HeaderComponent } from './shared/Client/header/header.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'home',
    component: AppComponent,
  },
  {
    path : 'footer',
    component : FooterComponent,
  },
  {
    path : 'header',
    component : HeaderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
