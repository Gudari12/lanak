import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Zerbitzuak } from './zerbitzuak/zerbitzuak';
import { Kontaktuak } from './kontaktuak/kontaktuak';
import { Ikasleak } from './ikasleak/ikasleak';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'zerbitzuak', component: Zerbitzuak },
  { path: 'kontaktua', component: Kontaktuak },
  { path: 'ikasleak', component: Ikasleak },
];
