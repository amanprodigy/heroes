import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    // define an array property to store heroes in the dashboard scope
    heroes: Hero[];

    // constructor expects angular to inject the HeroService
    // into a private heroService property
    constructor( private heroService: HeroService ) { }

    // ngOnInit hook calls the getHeroes
    ngOnInit() {
        this.getHeroes();
    }

    // get heroes from the hero service
    getHeroes(): void {
        this.heroService.getHeroes().subscribe(
            heroes => this.heroes = heroes.slice(1, 5)
        );
    }

}
