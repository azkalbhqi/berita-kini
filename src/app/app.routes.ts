import { Routes } from '@angular/router';
import { Beranda } from './pages/beranda/beranda';
import { Section } from './shared/components/section/section';
import { Terbaru } from './pages/terbaru/terbaru';

export const routes: Routes = [
  {
    path: '',
    component: Beranda // Halaman utama langsung manggil Beranda
  },
  {
    path: 'terbaru',
    // Nanti di sini kamu bisa buat component 'Terbaru'
    component: Terbaru
  },
  {
     path: ':category',
     component: Section
  }
];