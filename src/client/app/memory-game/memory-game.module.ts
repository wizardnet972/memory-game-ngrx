import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { routing } from './memory-game.routing';
import { MemoryGameContainer } from './memory-game.container';
import { MemoryGameEffects } from './memory-game.effects';
import { CardsService } from './memory-game.service';

let components = [
    MemoryGameContainer
];

let effects = [
    MemoryGameEffects
];

let providers = [
    CardsService
];

let imports = [
    CommonModule,
    routing,
    effects.map(effect => EffectsModule.run(effect)),
];

@NgModule({
    imports: imports,
    declarations: components,
    providers: providers
})
export default class MemoryGameModule { }
