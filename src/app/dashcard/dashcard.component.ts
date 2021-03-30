import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashcard',
  templateUrl: './dashcard.component.html',
  styleUrls: ['./dashcard.component.css']
})
export class DashcardComponent implements OnInit {
  
  @Input() title: string
  
  constructor() {
    this.title = "";
   }

  ngOnInit(): void {
  }

}
