import {AfterViewInit, Component, Directive, ElementRef, Input, OnInit, QueryList, ViewChildren} from '@angular/core';


/*@Directive({selector: 'path'})
export class SVGPath {
  @Input() id!: string;
}

 */

@Component({
  selector: 'app-puzzle-circle',
  templateUrl: './puzzle-circle.component.svg',
  styleUrls: ['./puzzle-circle.component.scss']
})
export class PuzzleCircleComponent implements OnInit, AfterViewInit {

  //@ViewChildren(SVGPath) svgPaths!: QueryList<SVGPath>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    //console.log(this.svgPaths);

  }

}
