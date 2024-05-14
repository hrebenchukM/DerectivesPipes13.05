import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-directive08ng-template-outlet',
  templateUrl: './directive08ng-template-outlet.component.html',
  styleUrls: ['./directive08ng-template-outlet.component.css']
})
export class Directive08ngTemplateOutletComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

}