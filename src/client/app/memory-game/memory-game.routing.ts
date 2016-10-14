import { Routes, RouterModule }  from '@angular/router';

import { MemoryGameContainer } from './memory-game.container';

const routes: Routes = [
  {
    path: '',
    component: MemoryGameContainer
  }
];

export const routing = RouterModule.forChild(routes);
