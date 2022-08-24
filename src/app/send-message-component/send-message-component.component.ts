import { Component, OnInit } from "@angular/core";
import { LoggingService } from "../logging.service";
@Component({
  selector: "app-send-message-component",
  templateUrl: "./send-message-component.component.html",
  styleUrls: ["./send-message-component.component.css"],
})
export class SendMessageComponentComponent implements OnInit {
  messageString!: string;

  constructor(private loggingSvce:LoggingService) {}

  ngOnInit(): void {}

  onSendMessage() {
    this.loggingSvce.log("Send following message: ");
    this.loggingSvce.log(this.messageString);
}

}