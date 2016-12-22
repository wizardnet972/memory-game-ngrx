import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { routing } from './memory-game.routing';
import { CardComponent } from '../card/card.component';
import { BoardComponent } from '../board/board.component';
import { MemoryGameEffects } from '../../memory-game/memory-game.effects';
import { CardsService } from '../../memory-game/memory-game.service';
import { MemoryGameComponent } from './memory-game.component';

let components = [
    MemoryGameComponent,
    CardComponent,
    BoardComponent
];

let providers = [
    CardsService
];

let imports = [
    CommonModule,
    routing,
    EffectsModule.run(MemoryGameEffects),
];

@NgModule({
    imports: imports,
    declarations: components,
    providers: providers
})
export class MemoryGameModule { }
