import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamo-app-ui-1727';

  constructor(
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
  }
}
