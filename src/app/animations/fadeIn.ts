import {animate, style, transition, trigger} from '@angular/animations';

export const fadeInAnimation =
  trigger('fadeIn', [
    transition('void => *', [
      style({opacity: 0}),
      animate(400)
    ])
  ]);
