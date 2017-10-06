import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-message',
  encapsulation: ViewEncapsulation.None,
  template: `
    <mat-card fxLayout="row" fxLayoutAlign="start center">
      <div fxFlex="50px">
        <span class="avatar accent-1">
          J
        </span>
      </div>
      <div fxFlex="20%">
        Austin McDaniel
      </div>
      <div fxFlex fxFill>
        Angular is frontend framework for the web.
      </div>
      <div fxFlex="15%" class="btn-col">
        <button mat-button>
          <mat-icon>alarm</mat-icon>
        </button>
        <button mat-button>
          <mat-icon>delete</mat-icon>
        </button>
        <button mat-button>
          <mat-icon>done</mat-icon>
        </button>
      </div>
    </mat-card>
  `,
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
}
