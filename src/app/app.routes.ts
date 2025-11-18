import { Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { AuthLayoutComponent } from './auth/auth-layout/auth-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

export const routes: Routes = [
    {path: "home", component : HomepageComponent},
    {path: "authentication", component : AuthLayoutComponent,
        children: [
            {path: 'login', component: LoginComponent},
            {path: 'signup', component: SignupComponent}
        ]
    }
];
