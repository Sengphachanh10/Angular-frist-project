import { Component } from '@angular/core';
import { StatusbarComponent } from '../statusbar/statusbar.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { YourselfComponent } from '../yourself/yourself.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StatusbarComponent, NavigationBarComponent, YourselfComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
