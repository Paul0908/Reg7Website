import {AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Router} from "@angular/router";
import {ScrollDetectionService} from "src/app/shared/services/scroll-detection.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  public isMenuCollapsed = true;
  public downScrolling = false;
  private navbarHeight!: number;
  @ViewChild('navbar') navbar!: ElementRef;


  constructor (@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, private scrollDetection: ScrollDetectionService){
  }

  ngOnInit(){
    this.scrollDetection.scrollHeight$.asObservable().subscribe((scrollHeight)=>{
      this.handleNavbarHeight(scrollHeight);
    })
  }

  handleNavbarHeight(y: string | number){
    if(y > 180){
      this.downScrolling = true;
      this.renderer.setStyle(this.document.body, 'padding-top', this.navbarHeight);
    } else {
      this.downScrolling = false;
      this.renderer.removeStyle(this.document.body, 'padding-top');
    }
  }

  ngAfterViewInit(): void {
    this.navbarHeight = this.navbar.nativeElement.offsetHeight;
  }

  /*
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(ev: any) {
    let scrollY = ev.path[1].pageYOffset;
    const navbarHeight = this.navbar.nativeElement.offsetHeight;
    if(scrollY > 180){
      this.downScrolling = true;
      this.renderer.setStyle(this.document.body, 'padding-top', navbarHeight);
    } else {
      this.downScrolling = false;
      this.renderer.removeStyle(this.document.body, 'padding-top');

    }
  }

   */


}
