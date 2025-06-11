import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor-directive',
  imports: [CommonModule],
  templateUrl: './ngfor-directive.html',
  styleUrl: './ngfor-directive.css'
})
export class NgforDirective {
  items = ['Apple', 'Banana', 'Papaya'];

  name = "peter p"
}
