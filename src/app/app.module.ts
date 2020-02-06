import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { MainComponent } from "./main/main.component";
import { ReservationComponent } from './reservation/reservation.component'
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, MainComponent, ReservationComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
