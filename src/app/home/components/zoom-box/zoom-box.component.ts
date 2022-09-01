import {Component, Input, OnInit} from '@angular/core';
import {SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-zoom-box',
  templateUrl: './zoom-box.component.html',
  styleUrls: ['./zoom-box.component.scss']
})
//TODO: color the boxes oder halt irgendwas bunt das sieht so lame aus

export class ZoomBoxComponent {
  @Input() svgGraphic: SafeHtml = '<svg xmlns="http://www.w3.org/2000/"></svg>';
  @Input() title: string = '';
  @Input() text: string = '';

}
