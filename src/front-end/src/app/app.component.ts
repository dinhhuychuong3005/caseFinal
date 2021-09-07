import { Component } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  value: any = 40;
  highValue: any = 60;
  options: Options = {
    floor: 0,
    ceil: 100
  };
}
