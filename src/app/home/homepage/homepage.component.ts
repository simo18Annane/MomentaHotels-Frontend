import { Component } from '@angular/core';
import { HerosectionComponent } from "../herosection/herosection.component";
import { CitiessectionComponent } from "../citiessection/citiessection.component";
import { ServicessectionComponent } from "../servicessection/servicessection.component";
import { AboutussectionComponent } from "../aboutussection/aboutussection.component";
import { ContactsectionComponent } from "../contactsection/contactsection.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HerosectionComponent, CitiessectionComponent, ServicessectionComponent, AboutussectionComponent, ContactsectionComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
