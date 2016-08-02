import {Component} from '@angular/core';
import { CalcAppComponent } from './calc.component';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [CalcAppComponent]
})

export class AppComponent {
	title = 'RCKR';
}
