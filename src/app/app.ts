import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { Home } from '../components/home/home';
import { About } from '../components/about/about';
import { Footer } from '../components/footer/footer';
import { Contact } from '../components/contact/contact';
import { Projects } from '../components/projects/projects';
import { Skills } from '../components/skills/skills';


@Component({
  imports: [RouterOutlet , Header , Home , About , Contact , Footer , Projects , Skills],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {



  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
