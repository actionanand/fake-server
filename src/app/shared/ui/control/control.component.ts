import { Component, contentChild, ElementRef, input, ViewEncapsulation } from '@angular/core';
// import { HostBinding, HostListener, ContentChild } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'logTheClick()',
  },
})
export class ControlComponent {
  /*
  @HostBinding('class') className = 'control';
  @HostListener('click') logTheClick() {
    console.log('clicked!');
  } 
  */

  title = input.required<string>();

  // @ContentChild('inputEl') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('inputEl');

  logTheClick() {
    console.log('clicked!');
    console.log(this.control());
  }
}
