import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Reservation } from "../models/reservation.model";
@Component({
  selector: "app-reservation",
  templateUrl: "./reservation.component.html",
  styleUrls: ["./reservation.component.css"]
})
export class ReservationComponent {
  @Input() reservation;
  @Input() index: number;
  @Output() remove = new EventEmitter<{i:number}>();

  handleRemove() {
    this.remove.emit({i:this.index});
  }
}
