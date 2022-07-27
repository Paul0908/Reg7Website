import {Injectable, OnDestroy, Renderer2, RendererFactory2} from '@angular/core';
import {BehaviorSubject, fromEventPattern, Observable, Subject, Subscription} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ScrollDetectionService implements OnDestroy {
  private _destroy$ = new Subject();
  private onScrollSubscription!: Subscription;

  public scrollHeight$ = new BehaviorSubject<number | string>(0);
  public onScroll$!: Observable<Event>;

  constructor(private rendererFactory2: RendererFactory2) {
    const renderer = this.rendererFactory2.createRenderer(null, null);
    this.createOnScrollObservable(renderer);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
    this.onScrollSubscription.unsubscribe();
  }

  private createOnScrollObservable(renderer: Renderer2) {
    let removeScrollEventListener: () => void;
    const createScrollEventListener = (
        handler: (e: Event) => boolean | void
    ) => {
      removeScrollEventListener = renderer.listen("window", "scroll", handler);
    };
    this.onScroll$ = fromEventPattern<Event>(createScrollEventListener, () =>
        removeScrollEventListener()
    ).pipe(takeUntil(this._destroy$));
    this.subscribeToOnScrollAndSetScrollHeight();
  }

  subscribeToOnScrollAndSetScrollHeight(){
    this.onScrollSubscription = this.onScroll$.subscribe((scrollEvent)=>{
      const scrollPath = scrollEvent.composedPath(),
          scrollHeight = (scrollPath[1] as any).scrollY;
      this.scrollHeight$.next(scrollHeight);
    })
  }

  // getScrollHeight(){
  //   return this.scrollHeight$.asObservable();
  // }

  initService() : Promise<Boolean>
  {
    return new Promise<Boolean>((resolve)=>{
      resolve(true);
    });
  }
}
