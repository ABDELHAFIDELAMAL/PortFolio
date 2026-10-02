import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { Home } from '../components/home/home';


@Component({
  imports: [RouterOutlet , Header , Home],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
