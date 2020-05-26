import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  buscarHeroe(palabra:string){
    event.preventDefault();
    console.log(palabra)
    this._router.navigate(['/search',palabra]);
  }
}
