import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-icon',
  imports: [NgClass],
  templateUrl: './edit-icon.component.html',
})
export class EditIconComponent {
  @Input() size: number = 4;
}
