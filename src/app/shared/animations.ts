import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

export let fade = trigger('fade', [
    // state(),
    transition('void => *', [
        style({ opacity: 0 }),
        animate('1s 1s')
    ])
]);

export let fade2 = trigger('fade2', [
    // state(),
    transition('void => *', [
        style({ opacity: 0 }),
        animate('1s 3s')
    ])
]);

export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateY(-400px)'}),
        animate('0.5s ease-out')

    ]),
    transition(':leave', [
        animate('0.5s 1s', style({transform: 'translateX(-100%)'}))
    ])
]);

export let slideRight = trigger('slideRight', [
    transition(':enter', [
        style({ transform: 'translateX(100%)'}),
        animate('0.5s 2s ease-out')
    ])
]);

export let slideBottom = trigger('slideBottom', [
    transition(':enter', [
        style({ transform: 'translateY(500px)'}),
        animate('0.5s 3s ease-out')
    ])
]);
