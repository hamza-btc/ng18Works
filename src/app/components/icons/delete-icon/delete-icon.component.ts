import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delete-icon',
  imports: [NgClass],
  templateUrl: './delete-icon.component.html',
})
export class DeleteIconComponent {
  @Input() size: number = 4;
}
