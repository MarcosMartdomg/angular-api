import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  post:any[] = [];
  constructor (private servicio:DataService){}
    ngOnInit(){
      this.servicio.getPosts().subscribe((data:any[])=>{
        this.post = data;
        console.log(this.post);
      });
   
  }
}