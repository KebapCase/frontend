import {animate, style, transition, trigger} from '@angular/animations';

export const openDialogAnimation =
  trigger('dialog', [
    transition('void => *', [
      style({ transform: 'translateY(-200px)' }),
      animate(200)
    ]),
    transition('* => void', [
      animate(150, style({ transform: 'translateY(-200px)' }))
    ])
  ])
