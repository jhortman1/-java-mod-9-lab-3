import { Component, OnInit } from "@angular/core";
import { MessagingDataService } from "../messagingDataService.service";
 import { Message } from "src/app/message.model";

@Component({
  selector: "app-sender-message-count-component",
  templateUrl: "./sender-message-count-component.component.html",
  styleUrls: ["./sender-message-count-component.component.css"],
})
export class SenderMessageCountComponentComponent implements OnInit {
  sentMessageCount = 0;

  constructor(private messagingSvce: MessagingDataService) {}

  ngOnInit(): void {
    this.messagingSvce.senderMessagesChanged.subscribe((messages: Message[]) => {
      this.sentMessageCount = messages.length;
    });
  }
}