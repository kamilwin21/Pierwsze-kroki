import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-definicja-zmiennych',
  templateUrl: './definicja-zmiennych.component.html',
  styleUrls: ['./definicja-zmiennych.component.css']
})
export class DefinicjaZmiennychComponent {
  
  drukuj_i(){
    var i =30;
    for(var i = 0;i<5;i++)
    {
      console.log(i);
    }
     console.log('i = ' + i);
  }
  drukuj_i1(){
    let i =30;
    for(let i = 0;i<5;i++)
    {
      console.log(i);
    }
     console.log('i = ' + i);
  }

  sprawdz1(){
     var a='Jestem A';
     if(true){
      var b = "Jestem B";
      console.log(b);
      console.log(a);
     }

     console.log(b);

  }

  sprawdz2(){
    let a='Jestem A';
    if(true){
     let b = "Jestem B";
     console.log(b);
     console.log(a);
    }
  // zmienna b nie jest widoczna poza warunkiem if
  //  console.log(b);

 }
}
