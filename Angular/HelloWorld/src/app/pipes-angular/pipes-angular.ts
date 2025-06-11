import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TruncateCustomPipe } from '../truncate-custom-pipe'

@Component({
  selector: 'app-pipes-angular',
  imports: [CommonModule, TruncateCustomPipe],
  templateUrl: './pipes-angular.html',
  styleUrl: './pipes-angular.css'
})
export class PipesAngular {
  public name = 'my name is peter parker i did graduation in chemistry'
  public message = "welcoome hhere"
  public person = {
    firstName:"john",
    lastname:"sharma",
  };
  public  date = new Date();
}
