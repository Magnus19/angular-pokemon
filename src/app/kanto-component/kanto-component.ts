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
  selector: 'app-kanto-component',
  styleUrl: './kanto-component.css',
  templateUrl: './kanto-component.html',
})
export class KantoComponent {
  activeMonologue = signal<string>('Click a leader\'s button to view their motto.');

  onMonologueReceived(message: string): void {
    this.activeMonologue.set(message);
  }

  kantoLeaders = signal<LeaderEntry[]>([
    {
      name: 'Brock',
      age: 16,
      location: 'Pewter City',
      badge: 'Boulder Badge',
      specialty: '💎Rock',
      gym: 'Pewter Gym',
      pokemonTeam: 'Geodude, Onix',
      monologue: 'True strength comes from patience and a steady resolve.',
    },
    {
      name: 'Misty',
      age: 17,
      location: 'Cerulean City',
      badge: 'Cascade Badge',
      specialty: '💧Water',
      gym: 'Cerulean Gym',
      pokemonTeam: 'Staryu, Starmie',
      monologue: 'Any wave can become a tide if you push forward with confidence.',
    },
    {
      name: 'Lt. Surge',
      age: 28,
      location: 'Vermilion City',
      badge: 'Thunder Badge',
      specialty: '⚡Electric',
      gym: 'Vermilion Gym',
      pokemonTeam: 'Voltorb, Pikachu, Raichu',
      monologue: 'Electricity rewards courage and punishes hesitation.',
    },
    {
      name: 'Erika',
      age: 21,
      location: 'Celadon City',
      badge: 'Rainbow Badge',
      specialty: '🦗Grass',
      gym: 'Celadon Gym',
      pokemonTeam: 'Victreebel, Tangela, Vileplume',
      monologue: 'Nature teaches us that beauty and power can grow together.',
    },
    {
      name: 'Koga',
      age: 26,
      location: 'Fuchsia City',
      badge: 'Soul Badge',
      specialty: '☠Poison',
      gym: 'Fuchsia Gym',
      pokemonTeam: 'Koffing, Muk, Weezing',
      monologue: 'The quietest shadows often hide the most dangerous strength.',
    },
    {
      name: 'Sabrina',
      age: 23,
      location: 'Saffron City',
      badge: 'Marsh Badge',
      specialty: '🧠Psychic',
      gym: 'Saffron Gym',
      pokemonTeam: 'Kadabra, Mr. Mime, Venomoth, Alakazam',
      monologue: 'The mind is a weapon, and focus is the key to victory.',
    },
    {
      name: 'Blaine',
      age: 35,
      location: 'Cinnabar Island',
      badge: 'Volcano Badge',
      specialty: '🔥Fire',
      gym: 'Cinnabar Gym',
      pokemonTeam: 'Growlithe, Ponyta, Rapidash, Arcanine',
      monologue: 'Flames do not fear challenge; they thrive under pressure.',
    },
    {
      name: 'Giovanni',
      age: 30,
      location: 'Viridian City',
      badge: 'Earth Badge',
      specialty: '🕳Ground',
      gym: 'Viridian Gym',
      pokemonTeam: 'Rhyhorn, Dugtrio, Nidoqueen, Rhydon',
      monologue: 'A leader is defined by the strength of the will behind the team.',
    },
  ]);
}
