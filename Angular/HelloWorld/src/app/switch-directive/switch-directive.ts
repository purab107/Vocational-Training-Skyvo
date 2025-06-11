import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch-directive',
  imports: [CommonModule, FormsModule],
  templateUrl: './switch-directive.html',
  styleUrl: './switch-directive.css'
})
export class SwitchDirective {
  selectedColor = "green";
}
