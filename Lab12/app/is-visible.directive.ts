import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[IsVisible]'
})
export class IsVisibleDirective {
  @Input("IsVisible") myHidden: boolean;
  constructor(public el: ElementRef, public renderer: Renderer2) {
  }


  ngOnInit(){
    // Use renderer to render the emelemt with styles
    console.log('Hidden ',this.myHidden)
    if(!this.myHidden) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }
  }

}
