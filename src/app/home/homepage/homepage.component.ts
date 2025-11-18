import { Component } from '@angular/core';
import { HerosectionComponent } from "../herosection/herosection.component";
import { CitiessectionComponent } from "../citiessection/citiessection.component";
import { ServicessectionComponent } from "../servicessection/servicessection.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HerosectionComponent, CitiessectionComponent, ServicessectionComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
