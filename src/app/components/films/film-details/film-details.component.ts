import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filme } from 'src/app/models/film.model';
import { FilmService } from 'src/app/services/film.service';

@Component({
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  id!: number | null
  film!: Filme
  
  constructor(private route: ActivatedRoute, private filmService: FilmService) { }
  
  ngOnInit(){
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.film = this.filmService.getASpecificFilme(this.id)
  }

}
