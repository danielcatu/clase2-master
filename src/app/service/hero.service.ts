import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
  //private hero:any[]=

  private hero: Hero[][] = [[
    {
      nombre: 'Aquaman',
      bio:
        'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/aquaman.png',
      aparicion: '1941-11-01',
      casa: 'DC',
    },
    {
      nombre: 'Batman',
      bio:
        'Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.',
      img: 'assets/img/batman.png',
      aparicion: '1939-05-01',
      casa: 'DC',
    },
    {
      nombre: 'Daredevil',
      bio:
        'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede "ver" a través de un "sexto sentido" que le sirve como un radar similar al de los murciélagos.',
      img: 'assets/img/daredevil.png',
      aparicion: '1964-01-01',
      casa: 'Marvel',
    },
    {
      nombre: 'Hulk',
      bio:
        'Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).',
      img: 'assets/img/hulk.png',
      aparicion: '1962-05-01',
      casa: 'Marvel',
    },
    {
      nombre: 'Linterna Verde',
      bio:
        'Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)',
      img: 'assets/img/linterna-verde.png',
      aparicion: '1940-06-01',
      casa: 'DC',
    },
    {
      nombre: 'Spider-Man',
      bio:
        'Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un "sentido arácnido", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
      img: 'assets/img/spiderman.png',
      aparicion: '1962-08-01',
      casa: 'Marvel',
    },
    {
      nombre: 'Wolverine',
      bio:
        'En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.',
      img: 'assets/img/wolverine.png',
      aparicion: '1974-11-01',
      casa: 'Marvel',
    },
  ],[
    {
      nombre: 'Ultron',
      bio:
        'Ultrón es un supervillano ficticio que aparece en los cómics publicados por Marvel Comics. Él es más reconocido como un némesis de los Vengadores, y tiene una relación casi familiar con su creador Hank Pym.',
      img: 'assets/img/Ultron.jpg',
      aparicion: '1963-07-01',
      casa: 'Marvel',
    },
    {
      nombre: 'Thanos',
      bio:
        'Su nombre es en parte un juego de palabras que hace referencia al término griego Θάνατος (Thánatos), que significa muerte, pero principalmente es una deformación del nombre del dios de la muerte no violenta, Tánatos. Él es el hijo de Mentor y el hermano de Starfox.',
      img: 'assets/img/Thanos.jpg',
      aparicion: '1973-02-01',
      casa: 'Marvel',
    },
    {
      nombre: 'Red Skull',
      bio:
        'Red Skull (Johann Schmidt), traducido como Cráneo Rojo o como Calavera Roja, es un supervillano que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje generalmente se representa como el archienemigo del superhéroe Capitán América.',
      img: 'assets/img/Red Skull.jpg',
      aparicion: '1941-10-01',
      casa: 'Marvel',
    },
    {
      nombre: 'Dormammu',
      bio:
        'Debutando en la Edad de Plata de los cómics, Dormammu ha aparecido en seis décadas de publicaciones de Marvel, destacando en los títulos de Doctor Strange y series limitadas como un enemigo recurrente del héroe místico.',
      img: 'assets/img/Dormammu.jpg',
      aparicion: '1964-11-01',
      casa: 'Marvel',
    },
    {
      nombre: 'Lex Luthor',
      bio:
        'Alexander Joseph "Lex" Luthor es un personaje de ficción de DC Comics, un supervillano y el archienemigo de Superman, aunque dado su alto estatus como supervillano, también entra en conflicto con Batman y otros superhéroes del Universo DC Una de sus más importantes apariciones fue en los cómics clasificado de 12 años en adelante.',
      img: 'assets/img/Lex Luthor.jpg',
      aparicion: '1940-04-01',
      casa: 'DC',
    },
    {
      nombre: 'Brainiac',
      bio:
        'Brainiac es un supervillano ficticio que aparece en los cómics estadounidenses publicados por DC Comics, generalmente como adversario de Superman.',
      img: 'assets/img/Brainiac.jpg',
      aparicion: '1961-05-01',
      casa: 'DC',
    },
    {
      nombre: 'Darkseid',
      bio:
        'Él es el padre de Orión, Kalibak, Grayven y Grial. Como el gobernante tiránico del planeta Apokolips, el objetivo final de Darkseid es conquistar el universo y eliminar todo el libre albedrío y los seres sensibles.',
      img: 'assets/img/Darkseid.jpg',
      aparicion: '1970-11-01',
      casa: 'DC',
    },
  ]];

  constructor() {
    console.log('Servicio listo para usar!!');
  }

  //getHeros(){
  getHeros(tipo:boolean): Hero[] {
    if (tipo) {
      return this.hero[0];
    }else{
      return this.hero[1]
    }
    
  }

  getHero(id: number) {
    return this.hero[id];
  }


  buscarHeroe(palabra: string): Hero[] {
    let heroArr: Hero[] = [];
    palabra = palabra.toLowerCase();
    for (let hero of this.hero[0]) {
      let nombre = hero.nombre.toLowerCase();
      if (nombre.indexOf(palabra) >= 0) {
        heroArr.push(hero);
      }
    }
    for (let hero of this.hero[1]) {
      let nombre = hero.nombre.toLowerCase();
      if (nombre.indexOf(palabra) >= 0) {
        heroArr.push(hero);
      }
    }
    return heroArr;
  }
}

export interface Hero {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}

