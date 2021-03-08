import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `<h2>{{"Hello " + parentData}}</h2>
  <button (click)="fireEvent()">Send data</button>
  
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  /*pass data from parent to child component*/
  @Input() public parentData: any;

  /*pass data child to parent with EventEmitter */
  @Output() public childEvent=new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  fireEvent()
  {
    this.childEvent.emit('Hey geek');
  }

}
