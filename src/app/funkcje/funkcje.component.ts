import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funkcje',
  templateUrl: './funkcje.component.html',
  styleUrls: ['./funkcje.component.css']
})
export class FunkcjeComponent {
  
     pole: string = 'Witaj świecie, pole';  
     
     wyswietl(){
          return 'Witaj świecie, wyswietl()';

     }
    wyswietl1(value: string){
        return value + ", wyswietl1()";

    }
 
    wyswietl2(value1: string, value2: string){
      return value1 + " " + value2 + ' wyswiet2()';

    }
    wyswietl3(value1: string, value2?: string){
      return value1 + " " + value2 + ' wyswiet3()';

    }
    wyswietl4(value1: string, value2 = 'świecie'){
      return value1 + " " + value2 + ", wyświet4()" ;

    }

//-----------------------------------------------------------
// słowo kluczowe this.
//-----------------------------------------------------------
 obszar:string = "Wypisz wartość"; 

 drukuj(){
   return this.obszar;

 }
 drukuj_inna_forma = ():string => {return this.obszar};

}



