import { Component, OnInit } from "@angular/core";
import { Message } from "../message.model";
import { MessagingDataService } from "../messagingDataService.service";
@Component({
  selector: "app-message-count-component",
  templateUrl: "./message-count-component.component.html",
  styleUrls: ["./message-count-component.component.css"],
})
export class MessageCountComponentComponent implements OnInit {
  sentMessageCount = 0;

  constructor(private messagingSvce: MessagingDataService) {}

  ngOnInit(): void {
    this.messagingSvce.userMessagesChanged.subscribe((messages: Message[]) => {
      this.sentMessageCount = messages.length;
    });
  }
}