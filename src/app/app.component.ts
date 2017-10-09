import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { messages } from './data';
import { NewMessageComponent } from './new-message/new-message.component';

@Component({
  selector: 'app-root',
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #sidenav class="sidenav-nav">
        <mat-list>
          <mat-list-item>
            <button mat-button routerLink="/" routerLinkActive>
              <mat-icon>inbox</mat-icon>
              Inbox
            </button>
          </mat-list-item>
          <mat-list-item>
            <button mat-button routerLink="/snoozed" routerLinkActive>
              <mat-icon>alarm</mat-icon>
              Snoozed
            </button>
          </mat-list-item>
          <mat-list-item>
            <button mat-button routerLink="/done" routerLinkActive>
              <mat-icon>done</mat-icon>
              Done
            </button>
          </mat-list-item>
          <mat-list-item>
            <hr />
          </mat-list-item>
          <mat-list-item>
            <button mat-button routerLink="/drafts" routerLinkActive>
              <mat-icon>drafts</mat-icon>
              Drafts
            </button>
          </mat-list-item>
          <mat-list-item>
            <button mat-button routerLink="/sent" routerLinkActive>
              <mat-icon>send</mat-icon>
              Sent
            </button>
          </mat-list-item>
          <mat-list-item>
            <button mat-button routerLink="/spam" routerLinkActive>
              <mat-icon>report_problem</mat-icon>
              Spam
            </button>
          </mat-list-item>
        </mat-list>
      </mat-sidenav>
      <div class="sidenav-content">
        <mat-toolbar color="primary" role="header" fxLayout="row" class="primary-toolbar">
          <div fxFlex="50px">
            <button type="button" class="menu-btn" mat-icon-button (click)="sidenav.open()">
              <mat-icon>menu</mat-icon>
            </button>
          </div>
          <div fxFlex>
            Inbox
          </div>
        </mat-toolbar>
        <content>
          <mat-list>
            <mat-list-item class="category-title">
              Today
            </mat-list-item>
            <mat-list-item *ngFor="let message of messages; let i = index;">
              <app-message
                [avatar]="message.avatar"
                [from]="message.from"
                [subject]="message.subject"
                [body]="message.body"
                [recieved]="message.recieved"
                (removed)="onRemove(i)"
                (reply)="onNewMessage($event)">
              </app-message>
            </mat-list-item>
          </mat-list>
        </content>
        <button
          mat-fab
          color="primary"
          class="new-fab"
          (click)="onNewMessage()"
          matTooltip="New Message"
          matTooltipPosition="before">
          <mat-icon>add</mat-icon>
        </button>
      </div>
    </mat-sidenav-container>
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  messages = messages;

  constructor(
      private snackBar: MatSnackBar,
      private dialog: MatDialog) {}

  onRemove(index: number): void {
    const copy = [...this.messages];
    copy.splice(index, 1);
    this.messages = copy;
  }

  onNewMessage(data: any = {}): void {
    const dialogRef = this.dialog.open(NewMessageComponent, {
      width: '75%',
      panelClass: 'new-message-dialog',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open('Email sent!', null, {
          duration: 2000
        });
      }
    });
  }

}
