import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FilmService {

  constructor() { }

  getAllFilmes(){
    return FILMES
  }

  //PRECISO DEIXAR ESSA FUNÇÃO MELHOR
  getASpecificFilme(filme: number){
    return FILMES[filme]
  }
}

const FILMES = [
  {
    id: 0,
    title: "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa",
    release: "09 de Dezembro de 2005",
    sinopse: "Durante os bombardeios da Segunda Guerra Mundial de Londres, quatro irmãos ingleses são enviados para uma casa de campo onde eles estarão seguros. Um dia, Lucy encontra um guarda-roupa que a transporta para um mundo mágico chamado Nárnia. Depois de voltar, ela logo volta a Nárnia com seus irmãos, Peter e Edmund, e sua irmã, Susan. Lá eles se juntam ao leão mágico, Aslan, na luta contra a Feiticeira Branca.",
    diretor: "Andrew Adamson",
    rating: 4.9,
    image: "../../assets/images/poster-films/filme01.jpg"
  },
  {
    id: 1,
    title: "As Crônicas de Nárnia: Prícipe Caspian",
    release: "30 de maio de 2008",
    sinopse: "Um ano após a sua última aventura, os irmãos Pevensie regressam à terra mágica de Nárnia e descobrem que 1300 anos se passaram. Nárnia está em guerra novamente e os irmãos unem forças com o Príncipe Caspian para derrotar o maldoso Rei Miraz e restaurar a paz.",
    diretor: "Andrew Adamson",
    rating: 5,
    image: "../../assets/images/poster-films/filme02.jpg"
  },
  {
    id: 2,
    title: "Norbit - Uma Comédia de Peso",
    release: "9 de fevereiro de 2007",
    sinopse: "Desde que foi abandonado em um orfanato, Norbit sempre teve uma vida muito dura. Agora, casado com Rasputia, sua vida é ainda pior. Mas tudo muda quando sua antiga namorada volta à cidade.",
    diretor: "Brian Robbins",
    rating: 4.1,
    image: "../../assets/images/poster-films/filme03.jpg"
  },
  {
    id: 3,
    title: "O Senhor dos Anéis: A Sociedade do Anel",
    release: "1 de janeiro de 2002",
    sinopse: "Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para o cumprimento desta jornada, ele aos poucos pode contar com outros hobbits, um elfo, um anão, dois humanos e um mago, totaliza",
    diretor: "Peter Jackson",
    rating: 4.9,
    image: "../../assets/images/poster-films/filme04.jpg"
  },
  {
    id: 4,
    title: "O Senhor dos Anéis: As duas Torres",
    release: " 27 de dezembro de 2002 ",
    sinopse: "Após a captura de Merry e Pippy pelos orcs, a Sociedade do Anel é dissolvida. Frodo e Sam seguem sua jornada rumo à Montanha da Perdição para destruir o anel e descobrem que estão sendo perseguidos pelo misterioso Gollum. Enquanto isso, Aragorn, o elfo e arqueiro Legolas e o anão Gimli partem para resgatar os hobbits sequestrados e chegam ao reino de Rohan, onde o rei Theoden foi vítima de uma maldição mortal de Saruman.",
    diretor: "Peter Jackson",
    rating: 4.8,
    image: "../../assets/images/poster-films/filme05.jpg"
  },
  {
    id: 5,
    title: "O Hobbit: Uma Jornada Inesperada",
    release: "14 de dezembro de 2012",
    sinopse: "Como a maioria dos hobbits, Bilbo Bolseiro leva uma vida tranquila até o dia em que recebe uma missão do mago Gandalf. Acompanhado por um grupo de anões, ele parte numa jornada até a Montanha Solitária para libertar o Reino de Erebor do dragão Smaug.",
    diretor: "",
    rating: 4.8,
    image: "../../assets/images/poster-films/filme06.jpg"
  },
  {
    id: 6,
    title: "O Hobbit: A Desolação de Smaug",
    release: "13 de dezembro de 2013",
    sinopse: "Ao lado de um grupo de anões e de Gandalf, Bilbo segue em direção à Montanha Solitária, onde deverá ajudar seus companheiros a retomar a Pedra de Arken. O problema é que o artefato está perdido em meio a um tesouro protegido pelo temido dragão Smaug.",
    diretor: "Peter Jackson",
    rating: 4.8,
    image: "../../assets/images/poster-films/filme07.jpg"
  },
  {
    id: 7,
    title: "O Regresso",
    release: "4 de fevereiro de 2016",
    sinopse: "Após ser atacado por um urso, o caçador Hugh Glass é abandonado na floresta por seu companheiro John Fitzgerald. Apesar de muito ferido, Glass consegue sobreviver e vai em busca de vingança.",
    diretor: "Alejandro González Iñárritu",
    rating: 4.8,
    image: "../../assets/images/poster-films/filme08.png"
  },
  {
    id: 8,
    title: "Fragmentado",
    release: "17 de março de 2017",
    sinopse: "Kevin possui 23 personalidades distintas e consegue alterná-las quimicamente em seu organismo apenas com a força do pensamento. Um dia, ele sequestra três adolescentes que encontra em um estacionamento. Vivendo em cativeiro, elas passam a conhecer as diferentes facetas de Kevin e precisam encontrar algum meio de escapar.",
    diretor: "M. Night Shyamalan",
    rating: 4.6,
    image: "../../assets/images/poster-films/filme09.jpg"
  }
]