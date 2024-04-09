import { Component } from '@angular/core';
import { ElasticService } from './elastic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  message = '';
  constructor(private service: ElasticService)
  {}

  logMessage() {
    try {
      this.service.logToElasticSearch("Message logged to elastic search.");
      this.message = "Message logged to elastic search.";
    } catch (error) {
      this.message = "Failed to log to elastic search"
    }
    return this.message;
  }
}
