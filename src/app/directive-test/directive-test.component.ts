import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-test',
  templateUrl: './directive-test.component.html',
  styleUrls: ['./directive-test.component.css']
})
export class DirectiveTestComponent implements OnInit {

  personnes = [
    {
      name: 'Perssone One',
      codeCountry: 'DZ'
    },
    {
      name: 'Perssone Tow',
      codeCountry: 'TN'
    },
    {
      name: 'Perssone Three',
      codeCountry: 'CA'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
