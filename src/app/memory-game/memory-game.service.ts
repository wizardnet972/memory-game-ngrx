import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { Card } from './memory-game.model';

@Injectable()
export class CardsService {

    getCards(): Observable<Card[]> {
        let cards = [
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

        return of(cards)
            .map(this.add)
            .map(this.duplicate)
            .map(this.shuffle);
    }

    add(cards: Card[]): Card[] {
        return cards.map(
            card => Object.assign({}, card, {
                picked: false,
                matched: false
            }));
    }

    duplicate(cards: Card[]): Card[] {
        return cards.concat(JSON.parse(JSON.stringify(cards)));
    }

    // Fisher--Yates Algorithm -- http://bost.ocks.org/mike/shuffle/
    shuffle(cards: Card[]): Card[] {
        let counter = cards.length;
        let temp: any;
        let index: any;
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
    }
}
