import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NuestraCompaniaComponent } from './components/nuestra-compania/nuestra-compania.component';
import { ROUTES } from './app.routes';

//importar rutas
import { Router, RouterModule } from '@angular/router';
import { NoticiasComponent } from './components/noticias/noticias.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NuestraCompaniaComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
