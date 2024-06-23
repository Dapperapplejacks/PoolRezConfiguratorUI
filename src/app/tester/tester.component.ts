import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-tester',
  standalone: true,
  imports: [NgIf],
  templateUrl: './tester.component.html',
  styleUrl: './tester.component.scss'
})
export class TesterComponent {
  public loginToken: string = "";
  public username: string = "";
  public password: string = "";

  public startDate: string = "";
  public endDate: string = "";
  public selectedReservation: Reservation | undefined;

  public login(): void{

  }

  public reserve(): void{

  }
}
