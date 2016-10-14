import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: './app/memory-game/memory-game.module'
    }
];
