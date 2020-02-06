import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html"
})
export class MainComponent {
  title = "Main Component";
  name: string = "";
  amount: number = 0;
  time: string = "";

  @Output() reserve = new EventEmitter<{
    name: string;
    amount: number;
    time: string;
  }>();

  onSubmitHandler() {
    console.log(`Submitted ${this.name}`);
    this.reserve.emit({
      name: this.name,
      amount: this.amount,
      time: this.time
    });
  }

  isComplete(): boolean {
    return this.name !== "" && this.amount > 0 && this.time !== ""
  }
}
