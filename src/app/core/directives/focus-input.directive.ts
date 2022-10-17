import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusInput]',
})
export class FocusInputDirective implements OnInit {
  constructor(private ref: ElementRef) {}

  // add appFocusInput
  ngOnInit(): void {
    if (this.ref) {
      console.log(22222);

      this.ref.nativeElement.focus();
    }
  }
}
