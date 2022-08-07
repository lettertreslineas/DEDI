import { Component, OnInit } from '@angular/core';
import { dedicatorias } from '../dedicatorias';

@Component({
  selector: 'app-dedicatorias',
  templateUrl: './dedicatorias.component.html',
  styleUrls: ['./dedicatorias.component.css']
})
export class DedicatoriasComponent implements OnInit {
dedicatorias = dedicatorias;


share() {
  window.alert('The product has been shared!');
}



  constructor() { }

  ngOnInit() {
  }

}