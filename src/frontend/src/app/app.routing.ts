import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegComponent} from './register/register.component'

const appRoutes: Routes = [
    { path: 'register', component: RegComponent },
    {path: 'login', component:LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'register' }
];

export const routing = RouterModule.forRoot(appRoutes);