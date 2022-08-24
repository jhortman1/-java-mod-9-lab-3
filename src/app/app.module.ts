import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ConversationHistoryComponentComponent } from './conversation-history-component/conversation-history-component.component';
import { ConversationThreadComponentComponent } from './conversation-thread-component/conversation-thread-component.component';
import { ConversationControlComponentComponent } from './conversation-control-component/conversation-control-component.component';
import { ContactListComponentComponent } from './contact-list-component/contact-list-component.component';
import { SendMessageComponentComponent } from './send-message-component/send-message-component.component';
import { SenderMessageComponentComponent } from './sender-message-component/sender-message-component.component';
import { UserMessageComponentComponent } from './user-message-component/user-message-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { HighlightDirective } from './highlight.directive';
import { BoldDirective } from './bold.directive';
import { HttpClientModule } from "@angular/common/http";
import { LoggingService } from "./logging.service";
import { MessagingDataService } from './messagingDataService.service';
import { MessageCountComponentComponent } from './message-count-component/message-count-component.component';
import { SenderMessageCountComponentComponent } from './sender-message-count-component/sender-message-count-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversationHistoryComponentComponent,
    ConversationThreadComponentComponent,
    ConversationControlComponentComponent,
    ContactListComponentComponent,
    SendMessageComponentComponent,
    SenderMessageComponentComponent,
    UserMessageComponentComponent,
    ContactComponentComponent,
    ContactComponentComponent,
    HighlightDirective,
    BoldDirective,
    MessageCountComponentComponent,
    SenderMessageCountComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoggingService,
    MessagingDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }