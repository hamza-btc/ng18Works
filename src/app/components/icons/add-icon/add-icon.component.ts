import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-icon',
  imports: [NgClass],
  templateUrl: './add-icon.component.html',
})
export class AddIconComponent {
  @Input() size: number = 4;
}
