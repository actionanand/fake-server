import { Component, ElementRef, EventEmitter, Output, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { ViewChild } from '@angular/core';

import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { ControlComponent } from '../../../../shared/ui/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.scss',
})
export class NewTicketComponent {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  @Output() addTicket = new EventEmitter<{ title: string; text: string }>();

  onSubmit(title: string, text: string) {
    console.log(this.form());
    this.form()?.nativeElement.reset();

    this.addTicket.emit({ title, text });
  }
}
