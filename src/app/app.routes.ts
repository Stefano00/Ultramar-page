import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NuestraCompaniaComponent } from './components/nuestra-compania/nuestra-compania.component';

export const ROUTES: Routes =[
    { path: 'home', component: HomeComponent},
    { path: 'nuestra-compania', component: NuestraCompaniaComponent},
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
]