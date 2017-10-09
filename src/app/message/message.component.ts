import { Component, HostBinding, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  encapsulation: ViewEncapsulation.None,
  template: `
    <mat-card>
      <div
        class="message-toolbar"
        fxLayoutAlign="start center"
        fxLayout="row">
        <div fxFlex="50px" [fxShow]="!opened" (click)="onOpenToggle()">
          <span class="avatar accent-1">
            {{avatar}}
          </span>
        </div>
        <div fxFlex="20%" [fxShow]="!opened" (click)="onOpenToggle()">
          {{from}}
        </div>
        <div fxFlex fxFill class="message-subject" (click)="onOpenToggle()">
          {{subject}}
        </div>
        <div fxFlex="15%" class="btn-col">
          <button mat-icon-button matTooltip="Remind Me..." matTooltipPosition="above">
            <mat-icon>alarm</mat-icon>
          </button>
          <button mat-icon-button (click)="removed.emit()" matTooltip="Delete" matTooltipPosition="above">
            <mat-icon>delete</mat-icon>
          </button>
          <button mat-icon-button (click)="removed.emit()" matTooltip="Done" matTooltipPosition="above">
            <mat-icon>done</mat-icon>
          </button>
        </div>
      </div>
      <div class="message-body" [fxShow]="opened" fxLayout="row">
        <div fxFlex="50px">
          <span class="avatar accent-1">
            {{avatar}}
          </span>
        </div>
        <div fxFlex>
          <div class="message-body-toolbar">
            <span class="message-from">{{from}}</span> <span class="message-to">to me</span>
            <button mat-icon-button class="message-more" [matMenuTriggerFor]="menu">
              <mat-icon>more_vert</mat-icon>
            </button>
            <mat-menu class="message-momre-menu" #menu="matMenu" [overlapTrigger]="false" xPosition="before">
              <button mat-menu-item (click)="onReply()">
                <mat-icon>reply</mat-icon>
                Reply
              </button>
              <button mat-menu-item (click)="onReply()">
                <mat-icon>forward</mat-icon>
                Forward
              </button>
              <hr />
              <button mat-menu-item>
                <mat-icon>print</mat-icon>
                Print
            </button>
            </mat-menu>
          </div>
          <div [innerHTML]="body"></div>
        </div>
      </div>
    </mat-card>
  `,
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  @HostBinding('class.message-opened')
  @Input() opened = false;

  @Input() avatar = '';
  @Input() from = '';
  @Input() subject = '';
  @Input() body = '';
  @Input() recieved = new Date();

  @Output() removed = new EventEmitter<void>();
  @Output() reply = new EventEmitter<any>();

  onOpenToggle(): void {
    this.opened = !this.opened;
  }

  onReply(): void {
    this.reply.emit({
      to: this.from,
      subject: `RE: ${this.subject}`
    });
  }

}
