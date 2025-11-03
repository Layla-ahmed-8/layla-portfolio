import { Routes } from '@angular/router';
import { Homecomponent  } from './pages/Home/homecomponent/homecomponent';
import { Workcomponent } from './pages/Work/workcomponent/workcomponent';
import { Aboutcomponent } from './pages/About/aboutcomponent/aboutcomponent';
import { Contactcomponent } from './pages/contact/contactcomponent/contactcomponent';

export const routes: Routes = [
  { path: '', component: Homecomponent  },
  { path: 'work', component: Workcomponent},
  { path: 'about', component: Aboutcomponent },
  { path: 'contact', component: Contactcomponent },
  { path: '**', redirectTo: '' }
];
