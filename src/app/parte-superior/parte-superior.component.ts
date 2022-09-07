import { Component, OnInit } from '@angular/core';
import { imagenes } from '../Imágenes';

@Component({
  selector: 'app-parte-superior',
  templateUrl: './parte-superior.component.html',
  styleUrls: ['./parte-superior.component.css']
})
export class ParteSuperiorComponent implements OnInit {

imagenes = imagenes;

  constructor() { }

  ngOnInit() {
  }

}