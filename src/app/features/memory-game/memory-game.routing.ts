import { Routes, RouterModule } from '@angular/router';

import { MemoryGameComponent } from './memory-game.component';

const routes: Routes = [
  {
    path: '',
    component: MemoryGameComponent
  }
];

export const routing = RouterModule.forChild(routes);
