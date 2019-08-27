import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-maintab',
  templateUrl: './maintab.component.html',
  styleUrls: ['./maintab.component.scss'],
})
export class MaintabComponent implements OnInit {
  @ViewChild('tabs') tabs: IonTabs;
  toolbarTitle = '';
  constructor() { }

  ngOnInit() {
  }

}
