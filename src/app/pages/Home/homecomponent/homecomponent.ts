import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Contactcomponent } from '../../contact/contactcomponent/contactcomponent';
import { Workcomponent } from '../../Work/workcomponent/workcomponent';
@Component({
  selector: 'app-homecomponent',
  standalone: true,
  imports: [CommonModule,RouterModule,Contactcomponent,Workcomponent],
  templateUrl: './homecomponent.html',
  styleUrl: './homecomponent.scss',
})
export class Homecomponent {
  featuredProjects = [
    {
      title: 'E-Commerce Redesign',
      description: 'A modern, user-centric redesign for an e-commerce experience.',
      image: 'assets/images/project1.jpg'
    },
    {
      title: 'Finance App UI',
      description: 'Crafted a sleek and intuitive interface for personal finance tracking.',
      image: 'assets/images/project2.jpg'
    },
    {
      title: 'Travel Dashboard',
      description: 'An interactive analytics dashboard for travel data visualization.',
      image: 'assets/images/project3.jpg'
    }
  ];
}
