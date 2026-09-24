import { Component, signal } from '@angular/core';
import { LeaderInfoComponent } from '../leader-info/leader-info';

interface LeaderEntry {
  name: string;
  age: number;
  location: string;
  badge: string;
  specialty: string;
  gym: string;
  pokemonTeam: string;
  monologue: string;
}

@Component({
  standalone: true,
  imports: [LeaderInfoComponent],
  selector: 'app-johto-component',
  styleUrl: './johto-component.css',
  templateUrl: './johto-component.html',
})
export class JohtoComponent {
  activeMonologue = signal<string>('Click a leader\'s button to view their motto.');

  onMonologueReceived(message: string): void {
    this.activeMonologue.set(message);
  }

  johtoLeaders = signal<LeaderEntry[]>([
    {
      name: 'Falkner',
      age: 18,
      location: 'Violet City',
      badge: 'Zephyr Badge',
      specialty: '💨Flying',
      gym: 'Violet Gym',
      pokemonTeam: 'Pidgey, Pidgeotto',
      monologue: 'Can we get much higher!',
    },
    {
      name: 'Bugsy',
      age: 19,
      location: 'Azalea Town',
      badge: 'Hive Badge',
      specialty: '🐛Bug',
      gym: 'Azalea Gym',
      pokemonTeam: 'Metapod, Kakuna, Scyther',
      monologue: 'Your code is full of bugs, and I\'m about to put a real one in you.',
    },
    {
      name: 'Whitney',
      age: 20,
      location: 'Goldenrod City',
      badge: 'Plain Badge',
      specialty: '👨Normal',
      gym: 'Goldenrod Gym',
      pokemonTeam: 'Clefairy, Miltank',
      monologue: 'Yes, this Clefairy is indeed a normal type',
    },
    {
      name: 'Morty',
      age: 24,
      location: 'Ecruteak City',
      badge: 'Fog Badge',
      specialty: '👻Ghost',
      gym: 'Ecruteak Gym',
      pokemonTeam: 'Gastly, Haunter, Gengar',
      monologue: 'Boo!',
    },
    {
      name: 'Chuck',
      age: 27,
      location: 'Cianwood City',
      badge: 'Storm Badge',
      specialty: '👊Fighting',
      gym: 'Cianwood Gym',
      pokemonTeam: 'Primeape, Poliwrath',
      monologue: 'Ano? Suntukan?',
    },
    {
      name: 'Jasmine',
      age: 22,
      location: 'Olivine City',
      badge: 'Mineral Badge',
      specialty: '📎Steel',
      gym: 'Olivine Gym',
      pokemonTeam: 'Magnemite, Magnemite, Steelix',
      monologue: 'Maybe I\'ll Steel your heart with my Steelix.',
    },
    {
      name: 'Pryce',
      age: 31,
      location: 'Mahogany Town',
      badge: 'Glacier Badge',
      specialty: '❄Ice',
      gym: 'Mahogany Gym',
      pokemonTeam: 'Seel, Dewgong, Piloswine',
      monologue: 'Is it just me, or is it getting colder in here?',
    },
    {
      name: 'Clair',
      age: 23,
      location: 'Blackthorn City',
      badge: 'Rising Badge',
      specialty: '🐉Dragon',
      gym: 'Blackthorn Gym',
      pokemonTeam: 'Dragonair, Dragonair, Dragonair, Kingdra',
      monologue: 'I have three Dragonairs and a Kingdra. I am indeed the master of dragons.',
    },
  ]);
}
