import { Directive } from '@angular/core';

import { Sidebar } from './sidebar.component';

@Directive({
  selector: '[closeSidebar]',
  standalone: true,
  host: {
    '(click)': '_onClick()'
  },
  standalone: false
})
export class CloseSidebar {
  constructor(private _sidebar: Sidebar) {}

  /** @internal */
  _onClick(): void {
    if (this._sidebar) {
      this._sidebar.close();
    }
  }
}
