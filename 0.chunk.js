webpackJsonp([0,4],{

/***/ 748:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__memory_game_routing__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_card_component__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__board_board_component__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__memory_game_memory_game_effects__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__memory_game_memory_game_service__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__memory_game_component__ = __webpack_require__(753);
/* harmony export (binding) */ __webpack_require__.d(exports, "MemoryGameModule", function() { return MemoryGameModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var components = [
    __WEBPACK_IMPORTED_MODULE_8__memory_game_component__["a" /* MemoryGameComponent */],
    __WEBPACK_IMPORTED_MODULE_4__card_card_component__["a" /* CardComponent */],
    __WEBPACK_IMPORTED_MODULE_5__board_board_component__["a" /* BoardComponent */]
];
var providers = [
    __WEBPACK_IMPORTED_MODULE_7__memory_game_memory_game_service__["a" /* CardsService */]
];
var imports = [
    __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
    __WEBPACK_IMPORTED_MODULE_3__memory_game_routing__["a" /* routing */],
    __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_6__memory_game_memory_game_effects__["a" /* MemoryGameEffects */]),
];
var MemoryGameModule = (function () {
    function MemoryGameModule() {
    }
    MemoryGameModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: imports,
            declarations: components,
            providers: providers
        }), 
        __metadata('design:paramtypes', [])
    ], MemoryGameModule);
    return MemoryGameModule;
}());
//# sourceMappingURL=C:/code/memory-game-ngrx/src/memory-game.module.js.map

/***/ },

/***/ 749:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_effects__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_actions__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_effects_module__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_effects_subscription__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_util__ = __webpack_require__(758);
/* unused harmony reexport mergeEffects */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_effects__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_actions__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__src_effects_module__["a"]; });
/* unused harmony reexport EffectsSubscription */
/* unused harmony reexport toPayload */





//# sourceMappingURL=index.js.map

/***/ },

/***/ 750:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Actions; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




var Actions = (function (_super) {
    __extends(Actions, _super);
    function Actions(actionsSubject) {
        _super.call(this);
        this.source = actionsSubject;
    }
    Actions.prototype.lift = function (operator) {
        var observable = new Actions(this);
        observable.operator = operator;
        return observable;
    };
    Actions.prototype.ofType = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i - 0] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__["filter"].call(this, function (_a) {
            var type = _a.type;
            var len = keys.length;
            if (len === 1) {
                return type === keys[0];
            }
            else {
                for (var i = 0; i < len; i++) {
                    if (keys[i] === type) {
                        return true;
                    }
                }
            }
            return false;
        });
    };
    Actions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    Actions.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Dispatcher */],] },] },
    ];
    return Actions;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]));
//# sourceMappingURL=actions.js.map

/***/ },

/***/ 751:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__effects__ = __webpack_require__(752);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return effects; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EffectsSubscription; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





var effects = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* OpaqueToken */]('ngrx/effects: Effects');
var EffectsSubscription = (function (_super) {
    __extends(EffectsSubscription, _super);
    function EffectsSubscription(store, parent, effectInstances) {
        _super.call(this);
        this.store = store;
        this.parent = parent;
        if (Boolean(parent)) {
            parent.add(this);
        }
        if (Boolean(effectInstances)) {
            this.addEffects(effectInstances);
        }
    }
    EffectsSubscription.prototype.addEffects = function (effectInstances) {
        var sources = effectInstances.map(__WEBPACK_IMPORTED_MODULE_4__effects__["a" /* mergeEffects */]);
        var merged = __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["merge"].apply(void 0, sources);
        this.add(merged.subscribe(this.store));
    };
    EffectsSubscription.prototype.ngOnDestroy = function () {
        if (!this.closed) {
            this.unsubscribe();
        }
    };
    EffectsSubscription.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    EffectsSubscription.ctorParameters = [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */],] },] },
        { type: EffectsSubscription, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* SkipSelf */] },] },
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Inject */], args: [effects,] },] },
    ];
    return EffectsSubscription;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["Subscription"]));
//# sourceMappingURL=effects-subscription.js.map

/***/ },

/***/ 752:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_observable_merge__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_ignoreElements__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_ignoreElements___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operator_ignoreElements__);
/* harmony export (immutable) */ exports["b"] = Effect;
/* unused harmony export getEffectsMetadata */
/* harmony export (immutable) */ exports["a"] = mergeEffects;


var METADATA_KEY = '@ngrx/effects';
function Effect(_a) {
    var dispatch = (_a === void 0 ? { dispatch: true } : _a).dispatch;
    return function (target, propertyName) {
        if (!Reflect.hasOwnMetadata(METADATA_KEY, target)) {
            Reflect.defineMetadata(METADATA_KEY, [], target);
        }
        var effects = Reflect.getOwnMetadata(METADATA_KEY, target);
        var metadata = { propertyName: propertyName, dispatch: dispatch };
        Reflect.defineMetadata(METADATA_KEY, effects.concat([metadata]), target);
    };
}
function getEffectsMetadata(instance) {
    var target = Object.getPrototypeOf(instance);
    if (!Reflect.hasOwnMetadata(METADATA_KEY, target)) {
        return [];
    }
    return Reflect.getOwnMetadata(METADATA_KEY, target);
}
function mergeEffects(instance) {
    var observables = getEffectsMetadata(instance).map(function (_a) {
        var propertyName = _a.propertyName, dispatch = _a.dispatch;
        var observable = typeof instance[propertyName] === 'function' ?
            instance[propertyName]() : instance[propertyName];
        if (dispatch === false) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_ignoreElements__["ignoreElements"].call(observable);
        }
        return observable;
    });
    return __WEBPACK_IMPORTED_MODULE_0_rxjs_observable_merge__["merge"].apply(void 0, observables);
}
//# sourceMappingURL=effects.js.map

/***/ },

/***/ 753:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__memory_game_memory_game_actions__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_store__ = __webpack_require__(419);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MemoryGameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemoryGameComponent = (function () {
    function MemoryGameComponent(store) {
        this.store = store;
        this.cards$ = store.select(__WEBPACK_IMPORTED_MODULE_3__shared_store__["a" /* getCardsEntities */]);
        store.select(__WEBPACK_IMPORTED_MODULE_3__shared_store__["b" /* getWinningStatus */])
            .filter(function (winning) { return !!winning; })
            .delay(300)
            .subscribe(this.onWinning);
    }
    MemoryGameComponent.prototype.reveal = function (cardIndex) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__memory_game_memory_game_actions__["b" /* RevealCardAction */]({ cardIndex: cardIndex }));
    };
    MemoryGameComponent.prototype.onWinning = function () {
        alert('Yeah! Good job! You did it!');
    };
    MemoryGameComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'app-memory-game',
            template: __webpack_require__(766),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ChangeDetectionStrategy */].OnPush
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === 'function' && _a) || Object])
    ], MemoryGameComponent);
    return MemoryGameComponent;
    var _a;
}());
//# sourceMappingURL=C:/code/memory-game-ngrx/src/memory-game.component.js.map

/***/ },

/***/ 754:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CardsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsService = (function () {
    function CardsService() {
    }
    CardsService.prototype.getCards = function () {
        var cards = [
            {
                name: 'php',
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png',
                id: 1,
            },
            {
                name: 'css3',
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png',
                id: 2
            },
            {
                name: 'html5',
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png',
                id: 3
            },
            {
                name: 'jquery',
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png',
                id: 4
            },
            {
                name: 'javascript',
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png',
                id: 5
            },
            {
                name: 'node',
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png',
                id: 6
            },
            {
                name: 'photoshop',
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/photoshop-logo.png',
                id: 7
            },
            {
                name: 'python',
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/python-logo.png',
                id: 8
            },
            {
                name: 'rails',
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/rails-logo.png',
                id: 9
            },
            {
                name: 'sass',
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sass-logo.png',
                id: 10
            },
            {
                name: 'sublime',
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sublime-logo.png',
                id: 11
            },
            {
                name: 'wordpress',
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/wordpress-logo.png',
                id: 12
            },
        ];
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(cards)
            .map(this.add)
            .map(this.duplicate)
            .map(this.shuffle);
    };
    CardsService.prototype.add = function (cards) {
        return cards.map(function (card) { return Object.assign({}, card, {
            picked: false,
            matched: false
        }); });
    };
    CardsService.prototype.duplicate = function (cards) {
        return cards.concat(JSON.parse(JSON.stringify(cards)));
    };
    // Fisher--Yates Algorithm -- http://bost.ocks.org/mike/shuffle/
    CardsService.prototype.shuffle = function (cards) {
        var counter = cards.length;
        var temp;
        var index;
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * counter);
            // Decrease counter by 1
            counter--;
            // And swap the last element with it
            temp = cards[counter];
            cards[counter] = cards[index];
            cards[index] = temp;
        }
        return cards;
    };
    CardsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], CardsService);
    return CardsService;
}());
//# sourceMappingURL=C:/code/memory-game-ngrx/src/memory-game.service.js.map

/***/ },

/***/ 755:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var merge_1 = __webpack_require__(420);
exports.merge = merge_1.mergeStatic;
//# sourceMappingURL=merge.js.map

/***/ },

/***/ 756:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return afterBootstrapEffects; });
/* harmony export (immutable) */ exports["b"] = runAfterBootstrapEffects;

var afterBootstrapEffects = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* OpaqueToken */]('ngrx:effects: Bootstrap Effects');
function runAfterBootstrapEffects(injector, subscription) {
    return function () {
        var effectInstances = injector.get(afterBootstrapEffects, false);
        if (effectInstances) {
            subscription.addEffects(effectInstances);
        }
    };
}
//# sourceMappingURL=bootstrap-listener.js.map

/***/ },

/***/ 757:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__effects_subscription__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bootstrap_listener__ = __webpack_require__(756);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EffectsModule; });




var EffectsModule = (function () {
    function EffectsModule() {
    }
    EffectsModule.run = function (type) {
        return {
            ngModule: EffectsModule,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__effects_subscription__["a" /* EffectsSubscription */],
                type,
                { provide: __WEBPACK_IMPORTED_MODULE_2__effects_subscription__["b" /* effects */], useExisting: type, multi: true }
            ]
        };
    };
    EffectsModule.runAfterBootstrap = function (type) {
        return {
            ngModule: EffectsModule,
            providers: [
                type,
                { provide: __WEBPACK_IMPORTED_MODULE_3__bootstrap_listener__["a" /* afterBootstrapEffects */], useExisting: type, multi: true }
            ]
        };
    };
    EffectsModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */], args: [{
                    providers: [
                        __WEBPACK_IMPORTED_MODULE_1__actions__["a" /* Actions */],
                        __WEBPACK_IMPORTED_MODULE_2__effects_subscription__["a" /* EffectsSubscription */],
                        {
                            provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* APP_BOOTSTRAP_LISTENER */],
                            multi: true,
                            deps: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injector */], __WEBPACK_IMPORTED_MODULE_2__effects_subscription__["a" /* EffectsSubscription */]],
                            useFactory: __WEBPACK_IMPORTED_MODULE_3__bootstrap_listener__["b" /* runAfterBootstrapEffects */]
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    EffectsModule.ctorParameters = [];
    return EffectsModule;
}());
//# sourceMappingURL=effects.module.js.map

/***/ },

/***/ 758:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export toPayload */
function toPayload(action) {
    return action.payload;
}
//# sourceMappingURL=util.js.map

/***/ },

/***/ 759:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoardComponent = (function () {
    function BoardComponent() {
        this.reveal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
    }
    BoardComponent.prototype.cardClicked = function (event, cardIndex) {
        var target = (event.currentTarget).children[0];
        var prevent = target.classList.contains('picked') || target.classList.contains('matched');
        if (!prevent) {
            this.reveal.emit(parseInt(cardIndex, 10));
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Array)
    ], BoardComponent.prototype, "cards", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Output */])(), 
        __metadata('design:type', Object)
    ], BoardComponent.prototype, "reveal", void 0);
    BoardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'app-board',
            template: __webpack_require__(764),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ChangeDetectionStrategy */].OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], BoardComponent);
    return BoardComponent;
}());
//# sourceMappingURL=C:/code/memory-game-ngrx/src/board.component.js.map

/***/ },

/***/ 760:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__memory_game_memory_game_model__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__memory_game_memory_game_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__memory_game_memory_game_model__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComponent = (function () {
    function CardComponent() {
        this.cardClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__memory_game_memory_game_model__["Card"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__memory_game_memory_game_model__["Card"]) === 'function' && _a) || Object)
    ], CardComponent.prototype, "card", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Output */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]) === 'function' && _b) || Object)
    ], CardComponent.prototype, "cardClicked", void 0);
    CardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'app-card',
            template: __webpack_require__(765),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ChangeDetectionStrategy */].OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], CardComponent);
    return CardComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/code/memory-game-ngrx/src/card.component.js.map

/***/ },

/***/ 761:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__memory_game_component__ = __webpack_require__(753);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routing; });


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__memory_game_component__["a" /* MemoryGameComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes);
//# sourceMappingURL=C:/code/memory-game-ngrx/src/memory-game.routing.js.map

/***/ },

/***/ 762:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__memory_game_service__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__memory_game_actions__ = __webpack_require__(418);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MemoryGameEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MemoryGameEffects = (function () {
    function MemoryGameEffects(store, actions$, cards) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.cards = cards;
        this.loadCards$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__memory_game_actions__["a" /* ActionTypes */].LOAD_CARDS)
            .startWith(new __WEBPACK_IMPORTED_MODULE_4__memory_game_actions__["c" /* LoadCardsAction */]())
            .switchMap(function () {
            return _this.cards.getCards()
                .map(function (cards) { return new __WEBPACK_IMPORTED_MODULE_4__memory_game_actions__["d" /* LoadCardsSuccessAction */]({ cards: cards }); });
        });
        this.revealCard$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__memory_game_actions__["a" /* ActionTypes */].REVEAL_CARD)
            .map(function (action) { return new __WEBPACK_IMPORTED_MODULE_4__memory_game_actions__["e" /* PickCardAction */](action.payload); });
        this.pickCard$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__memory_game_actions__["a" /* ActionTypes */].PICK_CARD)
            .withLatestFrom(this.store)
            .filter(function (_a) {
            var store = _a[1];
            return store.memory.cards.filter(function (c) { return c.picked && !c.matched; }).length > 1;
        })
            .map(function (_a) {
            var action = _a[0], store = _a[1];
            var id = store.memory.cards[action.payload.cardIndex].id;
            var pickedCards = store.memory.cards.filter(function (c) { return c.id === id && c.picked; });
            return (pickedCards.length === 2)
                ? new __WEBPACK_IMPORTED_MODULE_4__memory_game_actions__["f" /* MatchAction */](action.payload)
                : new __WEBPACK_IMPORTED_MODULE_4__memory_game_actions__["g" /* NoMatchAction */]();
        })
            .delay(300);
        this.winning$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__memory_game_actions__["a" /* ActionTypes */].MATCH)
            .withLatestFrom(this.store)
            .filter(function (_a) {
            var store = _a[1];
            return store.memory.cards.every(function (c) { return c.matched; });
        })
            .map(function () { return new __WEBPACK_IMPORTED_MODULE_4__memory_game_actions__["h" /* WinningAction */](); });
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Effect */])(), 
        __metadata('design:type', Object)
    ], MemoryGameEffects.prototype, "loadCards$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Effect */])(), 
        __metadata('design:type', Object)
    ], MemoryGameEffects.prototype, "revealCard$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Effect */])(), 
        __metadata('design:type', Object)
    ], MemoryGameEffects.prototype, "pickCard$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Effect */])(), 
        __metadata('design:type', Object)
    ], MemoryGameEffects.prototype, "winning$", void 0);
    MemoryGameEffects = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Actions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Actions */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__memory_game_service__["a" /* CardsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__memory_game_service__["a" /* CardsService */]) === 'function' && _c) || Object])
    ], MemoryGameEffects);
    return MemoryGameEffects;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/code/memory-game-ngrx/src/memory-game.effects.js.map

/***/ },

/***/ 763:
/***/ function(module, exports) {

//# sourceMappingURL=C:/code/memory-game-ngrx/src/memory-game.model.js.map

/***/ },

/***/ 764:
/***/ function(module, exports) {

module.exports = "<app-card *ngFor=\"let card of cards;let i = index;\" [card]=\"card\" (cardClicked)=\"cardClicked($event, i)\">\r\n</app-card>"

/***/ },

/***/ 765:
/***/ function(module, exports) {

module.exports = "<div class=\"card\" (click)=\"cardClicked.emit($event)\">\r\n\r\n\t<div class=\"inside\" [ngClass]=\"{'picked': card.picked, 'matched': card.matched }\">\r\n\t\t<div class=\"front\">\r\n\t\t\t<img [src]=\"card.img\" [alt]=\"card.name\" />\r\n\t\t</div>\r\n\t\t<div class=\"back\">\r\n\t\t\t<img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/codepen-logo.png\" alt=\"Codepen\" />\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ },

/***/ 766:
/***/ function(module, exports) {

module.exports = "<app-board [cards]=\"cards$ | async\" (reveal)=\"reveal($event)\"></app-board>"

/***/ },

/***/ 767:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(12);
var noop_1 = __webpack_require__(768);
/**
 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
 *
 * <img src="./img/ignoreElements.png" width="100%">
 *
 * @return {Observable} an empty Observable that only calls `complete`
 * or `error`, based on which one is called by the source Observable.
 * @method ignoreElements
 * @owner Observable
 */
function ignoreElements() {
    return this.lift(new IgnoreElementsOperator());
}
exports.ignoreElements = ignoreElements;
;
var IgnoreElementsOperator = (function () {
    function IgnoreElementsOperator() {
    }
    IgnoreElementsOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new IgnoreElementsSubscriber(subscriber));
    };
    return IgnoreElementsOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var IgnoreElementsSubscriber = (function (_super) {
    __extends(IgnoreElementsSubscriber, _super);
    function IgnoreElementsSubscriber() {
        _super.apply(this, arguments);
    }
    IgnoreElementsSubscriber.prototype._next = function (unused) {
        noop_1.noop();
    };
    return IgnoreElementsSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=ignoreElements.js.map

/***/ },

/***/ 768:
/***/ function(module, exports) {

"use strict";
"use strict";
/* tslint:disable:no-empty */
function noop() { }
exports.noop = noop;
//# sourceMappingURL=noop.js.map

/***/ }

});
//# sourceMappingURL=0.bundle.map