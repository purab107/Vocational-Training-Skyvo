import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { StyleBinding } from '@angular/core'

@Component({
  selector: 'app-style-binding',
  imports: [CommonModule],
  templateUrl: './style-binding.html',
  styleUrl: './style-binding.css'
})
export class StyleBinding {
  // backgroundColor = "red";
  fontSize = 100;
  hasError = true;
  bgColor = "red";
}
