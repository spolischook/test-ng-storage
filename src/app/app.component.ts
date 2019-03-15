import {Component, OnInit} from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testStore';
  constructor(protected localStorage: LocalStorage) {}
  ngOnInit() {
    this.localStorage.setItem('foo', 'bar').subscribe(() => {
      this.localStorage.getItem('foo').subscribe(data => {
        console.log('The foo is: ', data);
      });
    });
  }
}
