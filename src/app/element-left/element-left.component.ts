import { Component, OnInit } from '@angular/core';
import {places$} from '../data';

@Component({
  selector: 'app-element-left',
  templateUrl: './element-left.component.html',
  styleUrls: ['./element-left.component.css']
})
export class ElementLeftComponent implements OnInit {

  public places$ = places$;
  public type;

  ngOnInit(): void {

  }

  constructor() { }

  public getPhone(phone: number): string {
    const phoneStr = `${phone}`;
      return `Phone: ${phoneStr.slice(0, 3)}-${phoneStr.slice(3, 6)}-${phoneStr.slice(6)}`;
   }
}
