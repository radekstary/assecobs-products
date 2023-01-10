import { Component, Input } from '@angular/core';
import { Product} from '../../models/product';

@Component({
  selector: 'app-system-icon',
  templateUrl: './system-icon.component.html',
  styleUrls: ['./system-icon.component.scss']
})
export class SystemIconComponent {
  @Input() product: Product; // decorate the property with @Input()
}
