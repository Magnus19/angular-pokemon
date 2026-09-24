import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-leader-info',
  styleUrl: './leader-info.css',
  templateUrl: './leader-info.html',
})
export class LeaderInfoComponent {
  @Input() name = '';
  @Input() age = 0;
  @Input() location = '';
  @Input() badge = '';
  @Input() specialty = '';
  @Input() gym = '';
  @Input() pokemonTeam = '';
  @Input() monologue = '';

  @Output() monologueSelected = new EventEmitter<string>();

  showMonologue = false;

  toggleMonologue(): void {
    this.showMonologue = !this.showMonologue;
    
    this.monologueSelected.emit(`${this.name}: "${this.monologue}"`);
  }

  leaderImages: Record<string, string> = {
    Brock:
      'https://static0.srcdn.com/wordpress/wp-content/uploads/2020/11/Featured-Image-Brock-and-His-Drying-Pan-Cropped.jpg?q=50&fit=crop&w=1296&h=891&dpr=1.5',
    Misty:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/Pokemon-Misty-with-Horsea.jpg?q=50&fit=crop&w=1296&h=891&dpr=1.5',
    'Lt. Surge':
      'https://static.wikia.nocookie.net/joshs-adventures/images/2/2f/Lt._Surge_anime.png/revision/latest?cb=20230516095638',
    Erika:
      'https://static.wikia.nocookie.net/joshs-adventures/images/a/ac/Erika_anime_Journeys.png/revision/latest/scale-to-width-down/1000?cb=20230512015327',
    Koga: 'https://static.wikia.nocookie.net/joshs-adventures/images/3/3b/Koga_Best_Wishes.png/revision/latest/scale-to-width-down/1000?cb=20240320185608',
    Sabrina:
      'https://static.wikia.nocookie.net/joshs-adventures/images/8/8f/Sabrina_anime.png/revision/latest?cb=20230516095650',
    Blaine:
      'https://archives.bulbagarden.net/media/upload/thumb/c/c8/Lets_Go_Pikachu_Eevee_Blaine.png/216px-Lets_Go_Pikachu_Eevee_Blaine.png',
    Giovanni:
      'https://static.wikia.nocookie.net/joshs-adventures/images/b/b8/Giovanni_SM.png/revision/latest?cb=20250106052856',
    Falkner:
      'https://archives.bulbagarden.net/media/upload/thumb/e/e0/HeartGold_SoulSilver_Falkner.png/250px-HeartGold_SoulSilver_Falkner.png',
    Bugsy:
      'https://static.wikia.nocookie.net/joshs-adventures/images/a/a1/Bugsy_Opening.png/revision/latest/scale-to-width-down/1000?cb=20230516111139',
    Whitney:
      'https://static.wikia.nocookie.net/joshs-adventures/images/4/4a/Whitney_Opening.png/revision/latest/scale-to-width-down/1000?cb=20230516111518',
    Morty:
      'https://archives.bulbagarden.net/media/upload/thumb/1/1c/HeartGold_SoulSilver_Morty.png/200px-HeartGold_SoulSilver_Morty.png',
    Chuck:
      'https://archives.bulbagarden.net/media/upload/thumb/b/bd/HeartGold_SoulSilver_Chuck.png/300px-HeartGold_SoulSilver_Chuck.png',
    Jasmine:
      'https://static.wikia.nocookie.net/joshs-adventures/images/7/76/Jasmine_Sinnoh.png/revision/latest?cb=20230516111723',
    Pryce:
      'https://archives.bulbagarden.net/media/upload/thumb/0/02/HeartGold_SoulSilver_Pryce.png/180px-HeartGold_SoulSilver_Pryce.png',
    Clair:
      'https://static.wikia.nocookie.net/joshs-adventures/images/5/5c/Clair%27s_new_look.png/revision/latest/scale-to-width-down/1000?cb=20230516111924',
  };

  pokemonImages: Record<string, string> = {
    Geodude: 'https://img.pokemondb.net/artwork/large/geodude.jpg',
    Onix: 'https://img.pokemondb.net/artwork/large/onix.jpg',
    Staryu: 'https://img.pokemondb.net/artwork/large/staryu.jpg',
    Starmie: 'https://img.pokemondb.net/artwork/large/starmie.jpg',
    Voltorb: 'https://img.pokemondb.net/artwork/large/voltorb.jpg',
    Pikachu: 'https://img.pokemondb.net/artwork/large/pikachu.jpg',
    Raichu: 'https://img.pokemondb.net/artwork/large/raichu.jpg',
    Victreebel: 'https://img.pokemondb.net/artwork/large/victreebel.jpg',
    Tangela: 'https://img.pokemondb.net/artwork/large/tangela.jpg',
    Vileplume: 'https://img.pokemondb.net/artwork/large/vileplume.jpg',
    Koffing: 'https://img.pokemondb.net/artwork/large/koffing.jpg',
    Muk: 'https://img.pokemondb.net/artwork/large/muk.jpg',
    Weezing: 'https://img.pokemondb.net/artwork/large/weezing.jpg',
    Kadabra: 'https://img.pokemondb.net/artwork/large/kadabra.jpg',
    'Mr. Mime': 'https://img.pokemondb.net/artwork/large/mr-mime.jpg',
    Venomoth: 'https://img.pokemondb.net/artwork/large/venomoth.jpg',
    Alakazam: 'https://img.pokemondb.net/artwork/large/alakazam.jpg',
    Growlithe: 'https://img.pokemondb.net/artwork/large/growlithe.jpg',
    Ponyta: 'https://img.pokemondb.net/artwork/large/ponyta.jpg',
    Rapidash: 'https://img.pokemondb.net/artwork/large/rapidash.jpg',
    Arcanine: 'https://img.pokemondb.net/artwork/large/arcanine.jpg',
    Rhyhorn: 'https://img.pokemondb.net/artwork/large/rhyhorn.jpg',
    Dugtrio: 'https://img.pokemondb.net/artwork/large/dugtrio.jpg',
    Nidoqueen: 'https://img.pokemondb.net/artwork/large/nidoqueen.jpg',
    Rhydon: 'https://img.pokemondb.net/artwork/large/rhydon.jpg',
    Pidgey: 'https://img.pokemondb.net/artwork/large/pidgey.jpg',
    Pidgeotto: 'https://img.pokemondb.net/artwork/large/pidgeotto.jpg',
    Metapod: 'https://img.pokemondb.net/artwork/large/metapod.jpg',
    Kakuna: 'https://img.pokemondb.net/artwork/large/kakuna.jpg',
    Scyther: 'https://img.pokemondb.net/artwork/large/scyther.jpg',
    Clefairy: 'https://img.pokemondb.net/artwork/large/clefairy.jpg',
    Miltank: 'https://img.pokemondb.net/artwork/large/miltank.jpg',
    Gastly: 'https://img.pokemondb.net/artwork/large/gastly.jpg',
    Haunter: 'https://img.pokemondb.net/artwork/large/haunter.jpg',
    Gengar: 'https://img.pokemondb.net/artwork/large/gengar.jpg',
    Primeape: 'https://img.pokemondb.net/artwork/large/primeape.jpg',
    Poliwrath: 'https://img.pokemondb.net/artwork/large/poliwrath.jpg',
    Magnemite: 'https://img.pokemondb.net/artwork/large/magnemite.jpg',
    Steelix: 'https://img.pokemondb.net/artwork/large/steelix.jpg',
    Seel: 'https://img.pokemondb.net/artwork/large/seel.jpg',
    Dewgong: 'https://img.pokemondb.net/artwork/large/dewgong.jpg',
    Piloswine: 'https://img.pokemondb.net/artwork/large/piloswine.jpg',
    Dragonair: 'https://img.pokemondb.net/artwork/large/dragonair.jpg',
    Kingdra: 'https://img.pokemondb.net/artwork/large/kingdra.jpg',
  };

  getLeaderImage(): string {
    return this.leaderImages[this.name] ?? '';
  }

  getLeaderObjectPosition(): string {
    const positions: Record<string, string> = {
      'Lt. Surge': '50% 12%',
      Erika: '50% 14%',
      Blaine: '50% 16%',
      Giovanni: '50% 12%',
      Falkner: '50% 13%',
      Morty: '50% 9%',
      Chuck: '50% 12%',
      Jasmine: '50% 12%',
      Pryce: '50% 8%',
      Clair: '50% 22%',
    };

    return positions[this.name] ?? '50% 50%';
  }

  getPokemonImage(pokemon: string): string {
    return this.pokemonImages[pokemon] ?? '';
  }

  getPokemonList(): string[] {
    return this.pokemonTeam
      .split(',')
      .map((pokemon) => pokemon.trim())
      .filter((pokemon) => pokemon.length > 0);
  }

  getCardBackground(): string {
    const specialtyBackgrounds: Record<string, string> = {
      '💎Rock': '#b6b6b6',
      '💧Water': '#b8d9ff',
      '⚡Electric': '#fff0a3',
      '🦗Grass': '#b9eab2',
      '☠Poison': '#d8b4ff',
      '🧠Psychic': '#ffd3ec',
      '🔥Fire': '#ffd2b8',
      '🕳Ground': '#b9926b',
      '💨Flying': '#ccecff',
      '🐛Bug': '#d9ffd6',
      '👨Normal': '#d7b695',
      '👻Ghost': '#d4c8ff',
      '👊Fighting': '#ffe1bd',
      '📎Steel': '#c0c0c0',
      '❄Ice': '#b7d9f7',
      '🐉Dragon': '#c2b4ff',
      Flying: '#ccecff',
      Bug: '#d9ffd6',
      Normal: '#d7b695',
      Ghost: '#d4c8ff',
      Fighting: '#ffe1bd',
      Steel: '#c0c0c0',
      Ice: '#b7d9f7',
      Dragon: '#c2b4ff',
    };

    return specialtyBackgrounds[this.specialty] ?? '#ffffff';
  }

  getCardTextColor(): string {
    const specialtyTextColors: Record<string, string> = {
      '💎Rock': '#1f2937',
      '💧Water': '#0b4f9d',
      '⚡Electric': '#704700',
      '🦗Grass': '#174d22',
      '☠Poison': '#4b147a',
      '🧠Psychic': '#7a1d65',
      '🔥Fire': '#9a3b00',
      '🕳Ground': '#492916',
      '💨Flying': '#14506c',
      '🐛Bug': '#335f21',
      '👨Normal': '#5d3b1d',
      '👻Ghost': '#3d2c78',
      '👊Fighting': '#7c4410',
      '📎Steel': '#374151',
      '❄Ice': '#13416d',
      '🐉Dragon': '#2e1758',
      Flying: '#14506c',
      Bug: '#335f21',
      Normal: '#5d3b1d',
      Ghost: '#3d2c78',
      Fighting: '#7c4410',
      Steel: '#374151',
      Ice: '#13416d',
      Dragon: '#2e1758',
    };

    return specialtyTextColors[this.specialty] ?? '#111827';
  }
}
