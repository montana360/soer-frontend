import { Component, OnInit } from '@angular/core';
import '../../../../../../node_modules/tinymce/tinymce.min.js';

@Component({
  selector: 'app-pc-task',
  templateUrl: './pc-task.component.html',
  styleUrls: ['./pc-task.component.scss']
})
export class PcTaskComponent implements OnInit {
  items = ['Html', 'Css', 'Javascript', 'Angular', 'React'];
  public basicContent: string;

  constructor() {
    this.basicContent = '<p>Hello...</p>';
  }

  ngOnInit() {
  }

}
