import { Component, VERSION } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of(2, 4, 6, 8).subscribe((item) => console.log(item));

    from([20, 15, 10, 5]).subscribe({
      next: (item) => console.log(`resulting item.. ${item}`),
      error: (err) => console.error(`error occurred ${err}`),
      complete: () => console.log(`complete`),
    });

    of('Apple1', 'Apple2', 'Apple3').subscribe({
      next: (appple) => console.log(`Apple emitted.. ${appple}`),
      error: (err) => console.error(`error occurrd ${err}`),
      complete: () => console.log(`no more apples.. `),
    });
  }
}
