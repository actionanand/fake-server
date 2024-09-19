import { Component, input, ViewEncapsulation } from '@angular/core';
// import { HostBinding, HostListener } from '@angular/core';

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

  logTheClick() {
    console.log('clicked!');
  }
}
