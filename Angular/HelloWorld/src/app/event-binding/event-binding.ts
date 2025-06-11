import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [CommonModule],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css'
})
export class EventBinding {
  click:any;
  changeText:any;
  clickButton(){
    if(this.click == "Welcome To Konoha"){
      this.click = "Go Back From Konoha"
    }else{
      this.click = "Welcome To Konoha";
    }
    
  }

  onInput(event: Event){
    const input = event.target as HTMLInputElement;
    this.changeText = input.value;
    console.log(input.value);
  }

  addToCart(product:any){
    console.log('Added to card:', product);
  }

}
