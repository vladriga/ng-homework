import { Component, OnInit } from '@angular/core';
import {locations$} from '../data';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  public locations$ = locations$;
  public type: string;
  public SBposition: string;

  ngOnInit(): void {

  }

  constructor() { }

  public getPhone(phone: number): string {
    const phoneStr = `${phone}`;
      return `Phone: ${phoneStr.slice(0, 3)}-${phoneStr.slice(3, 6)}-${phoneStr.slice(6)}`;
   }

   public onMenuClick(selType: string): void {
      this.type = selType;
      document.querySelector('#style-2').scrollTop = 0;
   }

   public onLocationClick(location): void {
    console.log(location);
   }
}
