// child.ts
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.html",
  styleUrls: ["./child.css"],
})
export class ChildComponent {
  @Input() data: string = "";
  // @Input() data: any[] = [];
  @Output() event = new EventEmitter<string>();

  send() {
    this.event.emit("Event from child");
  }
}