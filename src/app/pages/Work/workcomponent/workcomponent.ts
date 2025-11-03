import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCard } from '../../../components/project-card/project-card';
@Component({
  selector: 'app-workcomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workcomponent.html',
  styleUrls: ['./workcomponent.scss'],
})
export class Workcomponent {
  projects = [
    {
      title: 'Splend Mobile App Case Study UI',
      description: 'A Solution Product To solve shared expenses between parteners or friends to avoid awareness of money.',
      image: 'assets/Images/Group 10.png',
      tags: ['Figma', 'Prototyping', 'UX Design'],
      demo: 'https://www.canva.com/design/DAGyaq4jffI/7u2Ct2Fb28Xdsy_HWJUuAw/edit?utm_content=DAGyaq4jffI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
    },
    {
      title: 'Travel Buddy Booking UI',
      description: 'Responsive Figma prototype designed for mobile travel planning and hotel booking.',
      image: 'assets/Images/Frame 427319012.png',
      tags: ['Figma', 'Prototyping', 'UX Design'],
      demo: 'https://www.figma.com/design/CwD5Rmgkxnn84fYVMnA2dn/hci-project-1?node-id=0-1&t=DNba2lgtKNeBovt5-1'
    },
    {
      title: 'Cashmate flow UI design',
      description: 'A UI design Flow To solve the problem of cash management and Easier for Requesting Money.',
      image: 'assets/Images/Frame 427319018.png',
      tags: ['Figma', 'Prototyping', 'UX Design'],
      demo: 'https://www.figma.com/design/ocbCinM1o3vD8Gyap0iQom/CashMate-Task-flow?node-id=282-240&t=c1v2TDTqjG2ZB3Se-1'
    },
    {
      title: 'Mobile BNPL App',
      description: 'BNPL application to pay in advance and purchase now and pay later.',
      image: 'assets/Images/Frame 222.png',
      tags: ['Figma', 'Prototyping', 'UX Design'],
      demo: 'https://www.figma.com/design/fj0EweWCiJiwmSAe5EUoiF/Moblie-Application-BNPL--Community-?node-id=0-1&t=wzeKpBlTot4LGRsZ-1'
    }
  ];
}
