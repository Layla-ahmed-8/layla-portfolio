import { Component, signal,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Aboutcomponent } from "./pages/About/aboutcomponent/aboutcomponent";
import { Workcomponent } from "./pages/Work/workcomponent/workcomponent";
import { Contactcomponent } from "./pages/contact/contactcomponent/contactcomponent";
import { Homecomponent } from './pages/Home/homecomponent/homecomponent';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Navbar, Footer, Aboutcomponent, Workcomponent, Contactcomponent,Homecomponent,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }
  protected readonly title = signal('layla-portifolio');
}
