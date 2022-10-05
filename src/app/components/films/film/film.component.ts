import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/models/film.model';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})

export class FilmComponent implements OnInit {
  textSearch = ''
  filmsFiltered!: Filme[]
  
  films!: Filme[]
  constructor(private filmService: FilmService) { 
  }

  ngOnInit(): void {
    this.films = this.filmService.getAllFilmes()
    this.filmsFiltered = this.films
  }

  set filtro(text: string){
      this.textSearch = text.toLowerCase()
  }

  get filtro(){
    return this.textSearch
  }

  search(){
     this.filmsFiltered = this.films.filter(item => 
      item.title.toLowerCase().includes(this.textSearch)
     )
  }

}
