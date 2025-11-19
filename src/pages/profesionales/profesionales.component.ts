import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Profesional {
  name: string;
  role: string;
  skills: string[];
  image?: string; // ruta en assets si hay foto
}

@Component({
  selector: 'profesionales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent {
  professionals: Profesional[] = [
    { name: 'Esther Hernández Moreno', role: 'Fisioterapeuta',   skills: ['Osteópata CO', 'Formación en Fisioterapia Deportiva', 'Terapia Manual', 'Procedimientos Invasivos Ecoguiados'], image: 'assets/Esther.jpg' },
    { name: 'Elena Vázquez Gómez', role: 'Fisioterapeuta',       skills: ['Osteópata', 'Formación en Fisioterapia Deportiva', 'Terapia Manual', 'Procedimientos Invasivos Ecoguiados'], image: 'assets/ElenaV.jpg' },
    { name: 'Helena Recuero Ramírez', role: 'Fisioterapeuta',    skills: ['Osteópata CO', 'Formación en Drenaje Linfático Manual', 'Experta en Pilates Suelo'], image: 'assets/Helena.jpg' },
    { name: 'Sofía Legaz Hall', role: 'Fisioterapeuta',          skills: ['Terapia Manual', 'Formación en Punción Seca', 'Experta en Pilates Suelo', 'Cursando Master de Fisioterapia Invasiva'], image: 'assets/Sofia.jpg' },
    { name: 'Clara Molina de Toro', role: 'Fisioterapeuta',      skills: ['Terapia Manual', 'Ecografia'] }, // sin foto por ahora
    { name: 'Daniel Toribio Cela', role: 'Recepcionista',      skills: [], image: 'assets/Daniel.jpg' },
  ];

  activeIndex = 0;

  prev() { this.activeIndex = (this.activeIndex - 1 + this.professionals.length) % this.professionals.length; }
  next() { this.activeIndex = (this.activeIndex + 1) % this.professionals.length; }
  goTo(i: number) { if (i >= 0 && i < this.professionals.length) this.activeIndex = i; }

  onKeydown(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft')  { this.prev();  e.preventDefault(); }
    if (e.key === 'ArrowRight') { this.next();  e.preventDefault(); }
  }
}
