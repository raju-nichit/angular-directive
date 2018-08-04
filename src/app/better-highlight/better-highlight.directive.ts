import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private  render: Renderer2) {
  }

  ngOnInit() {
    this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  //
  // @HostListener('mounseenter') mouseover(eventData: Event) {
  //   this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false);
  // }
  //
  // @HostListener('mounseleave') mouseleave(eventData: Event) {
  //   this.render.setStyle(this.elRef.nativeElement, 'background-color', 'transprent',false);
  // }
}
