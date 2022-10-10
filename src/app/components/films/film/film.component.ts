import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filme } from 'src/app/models/film.model';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
  animations: [
    trigger('expandir', [
      
      state('expandido', style({
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgb(26, 26, 42)',
        opacity: 1
      })),

      state('recolhido', style({
        width: '0%',
        backgroundColor: 'rgb(132, 137, 61)',
        opacity: '1'
      })),

      transition('recolhido => expandido', [
        animate('0.8s ease-out')
      ])

    ])
  ]
})

export class FilmComponent implements OnInit {
  textSearch = ''
  filmsFiltered!: Filme[]
  animar = false
  
  films!: Filme[]
  constructor(private filmService: FilmService, private route: Router) { 
  }

  ngOnInit(): void {
    this.films = this.filmService.getAllFilmes()
    this.filmsFiltered = this.films
  }

  toggle(filme: Filme){
    this.animar = true
    setTimeout(()=>{
      this.route.navigate(['/details/',filme.id])
    },900)
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
