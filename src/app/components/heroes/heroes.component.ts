import { Component, OnInit } from '@angular/core';
import { HeroService,Hero } from '../../service/hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  
  // hero:any[]=[];
  hero:Hero[]=[];
  categoria="";
  constructor( private _heroService: HeroService, private _router: Router) { 
  }

  ngOnInit(): void {
    if (this._router.url=="/villains") {
      this.categoria="villains";
      this.hero = this._heroService.getHeros(false);
      console.log(this.hero);
    }else{
      this.categoria="Heroes";
      this.hero = this._heroService.getHeros(true);
      console.log(this.hero);
    }
    

  }
  
  verHeroe(Name:String){
    this._router.navigate(['/detalles',Name]);
  }


}
