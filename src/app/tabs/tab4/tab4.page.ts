import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  numero!: number;
  numeroAleatorio!: number;
  max : number = 100;
  min : number = 0;
  resultado: String = "";
  intentos: number = 0;


  onClick() {
    if (this.numero > this.max || this.numero < this.min){
      this.resultado ="Introduce un número entre 0 y 100";
      this.intentos++;
    } 
    else{  
      if (this.numero == this.numeroAleatorio) {
      this.resultado ="HAS ACERTADO!!!!!";
      }
      else{
        if(this.numero < this.numeroAleatorio){
        this.resultado ="Introduce un número mayor";
        this.intentos++;
        }
        else{
        this.resultado ="Introduce un número menor";
        this.intentos++;
        }
      }
    }
  }
  
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        window.location.reload();
      },
    },
 ];

  constructor() { }

  ngOnInit() {
    this.numeroAleatorio = Math.random()*(this.max-this.min+1)+this.min;
    this.numeroAleatorio = Math.round (this.numeroAleatorio * 1) /1 ;
  }

}
