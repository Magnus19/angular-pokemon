import { Component, inject, signal } from '@angular/core';
import { LeaderInfoComponent } from '../leader-info/leader-info';
import { TrainerService } from '../trainer-service/trainer-service';


@Component({
  imports: [LeaderInfoComponent],
  standalone: true,
  selector: 'app-hoenn-component',
  styleUrl: './hoenn-component.css',
  templateUrl: './hoenn-component.html',
})

export class HoennComponent {
  trainerService = inject(TrainerService);
  activeMonologue = signal<string>('Click a leader\'s button to view their motto.');
  
    onMonologueReceived(message: string): void {
      this.activeMonologue.set(message);
    }
}
