import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.setDefaultLang('en');
  }
  changeLanguageHandler(event) {
    this.translate.use(event.target.value);
  }
}
