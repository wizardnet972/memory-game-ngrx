import * as fromMemoryGame from './memory-game.actions';
import { Card } from './memory-game.model';

export interface State {
    cards: Card[];
    winning: boolean;
};

const initialState: State = {
    cards: [],
    winning: false
};

export function reducer(state = initialState, action: fromMemoryGame.Actions): State {

    switch (action.type) {

        case fromMemoryGame.ActionTypes.LOAD_CARDS_SUCCESS: {

            return Object.assign({}, state, { cards: action.payload.cards });
        }

        case fromMemoryGame.ActionTypes.PICK_CARD: {

            return Object.assign({}, state, <State>{
                cards: state.cards.map(
                    (c, i) => (i === action.payload.cardIndex)
                        ? Object.assign({}, c, { picked: true })
                        : c
                )
            });
        }

        case fromMemoryGame.ActionTypes.NO_MATCH: {

            return Object.assign({}, state, <State>{
                cards: state.cards.map(
                    c => (c.picked && !c.matched)
                        ? Object.assign({}, c, { picked: false })
                        : c
                )
            });

        }

        case fromMemoryGame.ActionTypes.MATCH: {
            let id = state.cards[action.payload.cardIndex].id;

            return Object.assign({}, state, <State>{
                cards: state.cards.map(
                    (c, i) => (c.id === id)
                        ? Object.assign({}, c, { picked: true, matched: true })
                        : c
                )
            });

        }

        case fromMemoryGame.ActionTypes.WINNING: {

            return Object.assign({}, state, {
                winning: true
            });
        }

        default:
            return state;
    }

}
