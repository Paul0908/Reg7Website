import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-page-img-header',
  templateUrl: './sub-page-img-header.component.html',
  styleUrls: ['./sub-page-img-header.component.scss'],
})
export class SubPageImgHeaderComponent implements OnInit {
  @Input() title:string = '';

  @Input() subTitle?: string;

  @Input() image?: string;

  constructor() { }

  ngOnInit(): void {
  }
}
