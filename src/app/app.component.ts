import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sepehr';
  age: number = 20;
  uni: string = 'NajafAbad Azad University'
}