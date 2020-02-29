import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {


  @Input() id=0;
  @Input() name='Culturals';
  @Input() type='Non Technical';
  @Input() date='March 20,2020';
  @Input() venue='Auditorium';
  constructor() { }

  ngOnInit(): void {
  }

}
