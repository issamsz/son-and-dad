import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  couleur = 'rgb(185, 88, 88)';
  @Input()
  @Output() sendColor = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

sendColorToFather() {
this.sendColor.emit(this.couleur)
}

}
