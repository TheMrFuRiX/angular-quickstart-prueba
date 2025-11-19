import { Routes } from '@angular/router';
import { BienvenidaComponent } from '../pages/bienvenida/bienvenida.component';
import { ProfesionalesComponent } from '../pages/profesionales/profesionales.component';
import { TratamientosComponent } from '../pages/tratamientos/tratamientos.component';
import { ContactoComponent } from '../pages/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'profesionales', component: ProfesionalesComponent },
  { path: 'tratamientos', component: TratamientosComponent },
  { path: 'contacto', component: ContactoComponent },
];

