import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: 'ng-template[ModalContent]',
})
export class ModalDirective implements OnInit {
  constructor() {}

  // add appFocusInput
  ngOnInit(): void {}
}
