import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
  color: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  treat(font: any){
  this.color = font;
  }
}
