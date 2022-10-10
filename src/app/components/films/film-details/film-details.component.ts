import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filme } from 'src/app/models/film.model';
import { FilmService } from 'src/app/services/film.service';

@Component({
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css'],
  animations: [
    trigger('desaparecer',[

      state('opaco', style({
        opacity: 0
      })),

      state('visivel', style({
        opacity: 1
      })),

      transition('visivel => opaco', [
        animate('0.7s')]
      )

    ])
  ]
})
export class FilmDetailsComponent implements OnInit {
  animar = false
  id!: number | null
  film!: Filme
  
  constructor(private route: ActivatedRoute, private filmService: FilmService, private router: Router) { }
  
  ngOnInit(){
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.film = this.filmService.getASpecificFilme(this.id)
  }

  startAnimation(){
    this.animar = true
    setTimeout(()=>{
      this.router.navigate(['/home'])
    },800)
  }

}
