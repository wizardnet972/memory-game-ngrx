import { NgModule, OpaqueToken, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule, mergeEffects, Actions, Effect } from '@ngrx/effects';
import { routing } from './memory-game.routing';
import { CardComponent } from '../card/card.component';
import { BoardComponent } from '../board/board.component';
import { MemoryGameEffects } from '../../memory-game/memory-game.effects';
import { CardsService } from '../../memory-game/memory-game.service';
import { MemoryGameComponent } from './memory-game.component';
import { EffectsHelper } from '../../../shared/effects-helper.service';

const EFFECTS = new OpaqueToken('@ngrx/effects');

let components = [
    MemoryGameComponent,
    CardComponent,
    BoardComponent
];

let providers = [
    CardsService,
    Actions,
    { provide: EFFECTS, useClass: MemoryGameEffects, multi: true }
];

let imports = [
    CommonModule,
    routing,
];

@NgModule({
    imports: imports,
    declarations: components,
    providers: providers
})
export class MemoryGameModule {

    constructor(
        @Inject(EFFECTS) effects: any[],
        effectsHelper: EffectsHelper) {

        effectsHelper.add(effects);
    }
}
