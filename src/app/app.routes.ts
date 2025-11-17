import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SiginpageComponent } from './siginpage/siginpage.component';

export const routes: Routes = [
    {path: "home", component : HomepageComponent},
    {path: "signin", component : SiginpageComponent}
];
