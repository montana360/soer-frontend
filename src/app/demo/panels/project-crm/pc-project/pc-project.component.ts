import { Component, OnInit } from '@angular/core';
import '../../../../../../node_modules/tinymce/tinymce.min.js';

@Component({
  selector: 'app-pc-project',
  templateUrl: './pc-project.component.html',
  styleUrls: ['./pc-project.component.scss']
})
export class PcProjectComponent implements OnInit {
  items = ['Html', 'Css', 'Javascript', 'Angular', 'React'];
  public basicContent: string;

  constructor() {
    this.basicContent = '<p>Hello...</p>';
  }

  ngOnInit() {
  }

}
