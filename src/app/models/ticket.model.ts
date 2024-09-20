/*
export interface Ticket {
  id: string;
  title: string;
  request: string;
  status: 'open' | 'close';
}
*/

export interface Ticket {
  id: string;
  title: string;
  request: string;
  status: Status;
}

export enum Status {
  OPEN = 'open',
  CLOSE = 'close',
}
