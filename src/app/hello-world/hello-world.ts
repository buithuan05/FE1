import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  templateUrl: './hello-world.html',
  styleUrls: ['./hello-world.css'],
})
export class HelloWorld {
  myName = 'thuanbdph54938';
  myAge = 20;
  hasPhone = true;
}
