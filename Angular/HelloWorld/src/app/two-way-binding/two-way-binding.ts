import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from "../highlight-directive";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule, HighlightDirective, CommonModule],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css'
})
export class TwoWayBinding {
  name = " ";
  isLoggedIn=false;
  loginBlock=true;
}