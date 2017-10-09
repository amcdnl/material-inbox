import { Component, ViewEncapsulation, ViewChild, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MAT_DIALOG_DATA, MdAutocompleteSelectedEvent } from '@angular/material';
import { Observable } from 'rxjs/Observable';

const COMMA = 188;

@Component({
  selector: 'app-new-message',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="new-message-toolbar" mat-dialog-title>
      <mat-icon>drafts</mat-icon>
      <button mat-icon-button mat-dialog-close>
        <mat-icon>clear</mat-icon>
      </button>
    </div>
    <mat-dialog-content class="new-message-content">
      <mat-form-field class="recipients-list">
        <mat-chip-list #chipList>
          <mat-chip
            *ngFor="let recipient of recipients"
            [selectable]="true"
            [removable]="true"
            (remove)="removeRecipient(recipient)">
            {{recipient.name}}
            <mat-icon matChipRemove *ngIf="true">cancel</mat-icon>
          </mat-chip>
          <input
            placeholder="To"
            matInput
            #recipientInput
            [formControl]="recipientsCtrl"
            [matAutocomplete]="auto"
            [matChipInputFor]="chipList"
            [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
            [matChipInputAddOnBlur]="false"
            (matChipInputTokenEnd)="addRecipient($event)"
          />
        </mat-chip-list>
        <mat-autocomplete #auto="matAutocomplete" (optionSelected)="onOptionSelected($event)">
          <mat-option *ngFor="let option of filteredContacts | async" [value]="option">
            {{ option }}
          </mat-option>
        </mat-autocomplete>
      </mat-form-field>
      <mat-form-field class="subject-input">
        <input matInput placeholder="Subject" [formControl]="subjectCtrl" />
      </mat-form-field>
      <mat-form-field class="body-input">
        <textarea matInput placeholder="Body" [formControl]="bodyCtrl" rows="15"></textarea>
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-raised-button color="primary" [mat-dialog-close]="true">
        Send
      </button>
    </mat-dialog-actions>
  `,
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent {

  separatorKeysCodes = [ENTER, COMMA];

  contacts = [
    'Austin Mcdaniel',
    'Jeremy Elbourn',
    'Jules Kremer',
    'Brad Green',
    'Tina Gao'
  ];
  recipients = [];
  subjectCtrl = new FormControl();
  bodyCtrl = new FormControl();
  recipientsCtrl = new FormControl();
  filteredContacts: Observable<any[]>;

  @ViewChild('recipientInput') recipientInput;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.to && data.subject) {
      this.recipients.push({ name: data.to });
      this.subjectCtrl.setValue(data.subject);
    }

    this.filteredContacts = this.recipientsCtrl.valueChanges
        .startWith(null)
        .map(contact => contact ? this.filterContacts(contact) : this.contacts.slice());
  }

  addRecipient(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our person
    if ((value || '').trim()) {
      this.recipients.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeRecipient(recipient: any): void {
    const index = this.recipients.indexOf(recipient);
    if (index >= 0) {
      this.recipients.splice(index, 1);
    }
  }

  filterContacts(name: string): string[] {
    return this.contacts.filter(contact =>
      contact.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  onOptionSelected(event: MdAutocompleteSelectedEvent): void {
    this.recipients.push({ name: event.option.value });
    this.recipientInput.nativeElement.value = '';
  }

}
