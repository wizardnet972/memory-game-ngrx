import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import {
  async
} from '@angular/core/testing';
import {
  Route
} from '@angular/router';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './shared/store';
import { RouterStoreModule } from '@ngrx/router-store';

export function main() {

  describe('App component', () => {

    let config: Route[] = [
      { path: '', loadChildren: './app/memory-game/memory-game.module' },
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          FormsModule,
          HttpModule,

          RouterTestingModule.withRoutes(config),
          StoreModule.provideStore(reducer),
          RouterStoreModule.connectRouter()
        ],
        declarations: [TestComponent, AppComponent],
        providers: [
          { provide: APP_BASE_HREF, useValue: '/' }
        ]
      });
    });

    it('should build without a problem',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let compiled = fixture.nativeElement;

            expect(compiled).toBeTruthy();
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-app></sd-app>'
})

class TestComponent {
}
