import { Injectable, signal } from '@angular/core';

export interface LeaderEntry {
  name: string;
  age: number;
  location: string;
  badge: string;
  specialty: string;
  gym: string;
  pokemonTeam: string;
  monologue: string;
}

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private registry = signal<LeaderEntry[]>([
    {
  name: 'Roxanne',
  age: 24,
  location: 'Rustboro City',
  badge: 'Stone Badge',
  specialty: '🪨Rock',
  gym: 'Rustboro Gym',
  pokemonTeam: 'Geodude, Nosepass',
  monologue: 'I hope you brought something stronger than a rock.',
},
{
  name: 'Brawly',
  age: 19,
  location: 'Dewford Town',
  badge: 'Knuckle Badge',
  specialty: '👊Fighting',
  gym: 'Dewford Gym',
  pokemonTeam: 'Machop, Makuhita',
  monologue: 'You want to fight? Then let\'s throw some hands!',
},
{
  name: 'Wattson',
  age: 58,
  location: 'Mauville City',
  badge: 'Dynamo Badge',
  specialty: '⚡Electric',
  gym: 'Mauville Gym',
  pokemonTeam: 'Magnemite, Voltorb, Magneton',
  monologue: 'I\'m positively charged and ready to shock you!',
},
{
  name: 'Flannery',
  age: 18,
  location: 'Lavaridge Town',
  badge: 'Heat Badge',
  specialty: '🔥Fire',
  gym: 'Lavaridge Gym',
  pokemonTeam: 'Numel, Slugma, Torkoal',
  monologue: 'Things are about to get really hot in here.',
},
{
  name: 'Norman',
  age: 39,
  location: 'Petalburg City',
  badge: 'Balance Badge',
  specialty: '👨Normal',
  gym: 'Petalburg Gym',
  pokemonTeam: 'Slaking, Vigoroth, Slaking',
  monologue: 'Being normal is harder than it looks.',
},
{
  name: 'Winona',
  age: 25,
  location: 'Fortree City',
  badge: 'Feather Badge',
  specialty: '💨Flying',
  gym: 'Fortree Gym',
  pokemonTeam: 'Swellow, Pelipper, Skarmory, Altaria',
  monologue: 'Take to the skies, because you\'re about to get blown away!',
},
{
  name: 'Tate',
  age: 10,
  location: 'Mossdeep City',
  badge: 'Mind Badge',
  specialty: '🔮Psychic',
  gym: 'Mossdeep Gym',
  pokemonTeam: 'Solrock',
  monologue: 'We can read your next move before you even make it.',
},
{
  name: 'Liza',
  age: 10,
  location: 'Mossdeep City',
  badge: 'Mind Badge',
  specialty: '🔮Psychic',
  gym: 'Mossdeep Gym',
  pokemonTeam: 'Lunatone',
  monologue: 'Two minds are better than one.',
},
{
  name: 'Juan',
  age: 36,
  location: 'Sootopolis City',
  badge: 'Rain Badge',
  specialty: '💧Water',
  gym: 'Sootopolis Gym',
  pokemonTeam: 'Luvdisc, Whiscash, Sealeo, Crawdaunt, Kingdra',
  monologue: 'Let the water flow, and let your defeat follow.',
},
  ]);

  trainers = this.registry.asReadonly();
}