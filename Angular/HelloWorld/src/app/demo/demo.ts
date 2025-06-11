import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Myservice } from '../myservice';

@Component({
  selector: 'app-demo',
  imports: [CommonModule, FormsModule],
  providers: [Myservice],
  templateUrl: './demo.html',
  styleUrl: './demo.css'
})
export class Demo implements OnChanges, OnInit, AfterViewInit{
  @Input() message!: string;
  constructor(private myService: Myservice){
    
  }

  // @Output() messageEvent = new EventEmitter<string>();

  // sendMessage(){
  //   this.messageEvent.emit('Hello papa');
  // }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges - title changed:', changes['message']);
  }

  users: any[] = [];
  msg: any;

  ngOnInit(){
    console.log('ngOnInit - Component Initialized');
    this.loadData();
    this.msg = this.myService.getMessage();
  }

  loadData() : void {
    this.users = [
      { id: 1, name: 'Pankaj Williams', email: 'pankaj@willliams.com'},
      { id: 2, name: 'Alex Kumar', email: 'alex@kumar.com'},
      { id: 3, name: 'Tanmay Khan', email: 'tanmay@khan.com'},
    ];
    console.log('Data Loaded: ', this.users);
  }

  @ViewChild('inputRef') inputElement! : ElementRef;

  ngAfterViewInit(): void{
    console.log('ngAfterViewInit called');
    this.inputElement.nativeElement.focus();
  }

}
