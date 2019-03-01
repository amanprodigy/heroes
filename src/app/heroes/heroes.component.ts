import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    // define getHeroes to fetch heroes from the service
    getHeroes(): void {
        // this.heroes = this.heroService.getHeroes();
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
      // call getHeroes at an appropriate time after the
      // angular components are created
      this.getHeroes();
  }

}
