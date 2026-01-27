import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Web } from '../web';
import { Alumno } from '../models/alumno.interface';

@Component({
  selector: 'app-ikasleak',
  imports: [CommonModule],
  templateUrl: './ikasleak.html',
  styleUrl: './ikasleak.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Ikasleak {
  private service = inject(Web);
  
  alumnos = this.service.getAlumnos();
  alumnoSeleccionado = signal<Alumno | null>(null);
  mostrarModal = signal(false);

  abrirDetalles(alumno: Alumno) {
    this.alumnoSeleccionado.set(alumno);
    this.mostrarModal.set(true);
  }

  cerrarModal() {
    this.mostrarModal.set(false);
    setTimeout(() => {
      this.alumnoSeleccionado.set(null);
    }, 300);
  }

  handleModalClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.cerrarModal();
    }
  }
}

