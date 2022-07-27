import {Component, OnDestroy, OnInit} from '@angular/core';
import { ScrollDetectionService } from 'src/app/shared/services/scroll-detection.service';
import {Subscription} from "rxjs";

//TODO: !!!!!!!!!!   handleLockedUpChildren die Zahlen anpassen um die Sachen nicht zu spät zu laden
@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit, OnDestroy {
  private scrollHeightSubscription!: Subscription;

  public lockedUpLazyChildren: boolean[] = [true, true, true, true]

  constructor(private scrollDetection: ScrollDetectionService) {
  }

  ngOnInit(): void {
    this.scrollHeightSubscription =
        this.scrollDetection.scrollHeight$.asObservable()
            .subscribe((scrollHeight)=>{
        this.handleLockedUpLazyChildren(scrollHeight);
    })
  }

  ngOnDestroy(): void {
    this.scrollHeightSubscription.unsubscribe();
  }


  private handleLockedUpLazyChildren(scrollHeight: number | string) {
    if(scrollHeight >= 0){
      this.lockedUpLazyChildren[0] = false;
    }
    if(scrollHeight > 300){
      this.lockedUpLazyChildren[1] = false;
    }
    if(scrollHeight > 600){
      this.lockedUpLazyChildren[2] = false;
    }
  }
}
