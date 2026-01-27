import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Web } from '../web';

@Component({
  selector: 'app-zerbitzuak',
  imports: [CommonModule],
  templateUrl: './zerbitzuak.html',
  styleUrl: './zerbitzuak.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Zerbitzuak {
  private service = inject(Web);
  zerbitzuak = this.service.getZerbitzuak();
}

