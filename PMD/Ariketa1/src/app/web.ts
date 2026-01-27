import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Alumno } from './models/alumno.interface';
import { Zerbitzua } from './models/zerbitzua.interface';
import { Kontaktua } from './models/kontaktua.interface';

@Injectable({
  providedIn: 'root',
})
export class Web {
  private alumnos = signal<Alumno[]>([
    {
      id: 1,
      izena: 'Juan',
      abizena: 'García',
      zenbakia: '123456789',
      jatorrizkoHerria: 'Bilbao',
    },
    {
      id: 2,
      izena: 'María',
      abizena: 'López',
      zenbakia: '987654321',
      jatorrizkoHerria: 'Donostia',
    },
    {
      id: 3,
      izena: 'Aitor',
      abizena: 'Martínez',
      zenbakia: '555666777',
      jatorrizkoHerria: 'Vitoria',
    },
    {
      id: 4,
      izena: 'Leire',
      abizena: 'González',
      zenbakia: '444555666',
      jatorrizkoHerria: 'Gasteiz',
    },
  ]);

  private zerbitzuak = signal<Zerbitzua[]>([
    {
      id: 1,
      izena: 'Hezkuntza',
      deskribapena: 'Kualitate handiko hezkuntzaren eskaintza',
    },
    {
      id: 2,
      izena: 'Lanbide orientazioa',
      deskribapena: 'Zure etorkizuna planifikatzen laguntzen dizugu',
    },
    {
      id: 3,
      izena: 'Hedapena',
      deskribapena: 'Gradu anitzeko eskaintza zabala',
    },
    {
      id: 4,
      izena: 'Teknologia',
      deskribapena: 'Teknologia eta ordenagailuen inbertsioa nagusia',
    },
  ]);

  getAlumnos() {
    return this.alumnos.asReadonly();
  }

  getZerbitzuak() {
    return this.zerbitzuak.asReadonly();
  }

  enviarContacto(contacto: Kontaktua): boolean {
    console.log('Contacto enviado:', contacto);
    return true;
  }
}

