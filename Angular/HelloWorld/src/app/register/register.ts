import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
@Component({
  selector: 'app-register',
  imports: [CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  protected title = 'HelloWorld';
  protected pokemon = 'pikachu';
  firstName = 'Peter';
  lastName = 'Parker';
  imageUrl = 'favicon.ico';
  currentClass = 'text-white';
  isActive = true;
  isHighlighted = false;
  isError = false;
  fontSize = 10;
}
