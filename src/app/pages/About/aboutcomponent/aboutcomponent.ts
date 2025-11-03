import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aboutcomponent',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './aboutcomponent.html',
  styleUrl: './aboutcomponent.scss',
})
export class Aboutcomponent {

}
