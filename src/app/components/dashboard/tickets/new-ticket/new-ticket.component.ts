import { Component } from '@angular/core';

import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { ControlComponent } from '../../../../shared/ui/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.scss',
})
export class NewTicketComponent {}
