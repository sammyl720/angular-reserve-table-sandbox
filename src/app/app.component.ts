import { Component } from "@angular/core";
import { Reservation } from "./models/reservation.model";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  reservationList: Reservation[] = [];

  handleSubmit(event) {
    this.reservationList.push(
      new Reservation(event.name, event.amount, event.time)
    );
    console.log(this.reservationList);
  }

  handleRemove(event) {
    this.reservationList = this.reservationList.filter((_, i) => i !== event.i)
  }
i}
