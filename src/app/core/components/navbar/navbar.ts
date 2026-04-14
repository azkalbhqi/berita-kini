import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  NavbarItems = [
    {
      name: 'Beranda',
      route: '/',
    },
    {
      name: 'Terbaru',
      route: '/terbaru',
    },
    {
      name: 'Hiburan',
      route: '/hiburan',
    },
    {
      name: 'Gaya Hidup',
      route: '/gaya-hidup',
    },
    {
      name: 'Olahraga',
      route: '/olahraga',
    },
    {
      name: 'Nasional',
      route: '/nasional',
    },
    {
      name: 'Internasional',
      route: '/internasional',
    },

  ];
}
