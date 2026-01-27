import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Web } from '../web';
import { Kontaktua } from '../models/kontaktua.interface';

@Component({
  selector: 'app-kontaktuak',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './kontaktuak.html',
  styleUrl: './kontaktuak.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kontaktuak {
  private fb = inject(FormBuilder);
  private service = inject(Web);
  
  form: FormGroup;
  mensajeEnviado = signal<string | null>(null);
  mostrarMensaje = signal(false);

  constructor() {
    this.form = this.fb.group({
      izena: ['', [Validators.required, Validators.minLength(3)]],
      zenbakia: ['', [Validators.required, Validators.pattern(/^\d{9,}$/)]],
      zalantza: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const contacto: Kontaktua = this.form.value;
      this.service.enviarContacto(contacto);
      
      this.mensajeEnviado.set(
        `${contacto.izena}, zure zalantza behar bezala bidali da`
      );
      this.mostrarMensaje.set(true);
      
      this.form.reset();
      
      setTimeout(() => {
        this.mostrarMensaje.set(false);
      }, 5000);
    }
  }
}

