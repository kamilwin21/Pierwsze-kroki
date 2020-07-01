import { Component, OnInit } from '@angular/core';
import { Pies, Type } from '../pies';

@Component({
  selector: 'app-interfejsy',
  templateUrl: './interfejsy.component.html',
  styleUrls: ['./interfejsy.component.css']
})
export class InterfejsyComponent {
  
pies: Pies = ({
  name: 'Reksio',
  age: 4,
  color: 'szary',
  wyglad: ({
     wysokosc: 20,
     typ: "nieagresywny",
     
  }) ,
})


}
