import * as _ from 'underscore';

export class ModalService {

  private modals: any[] = [];

  constructor() { }

  add(modal: any) {
    this.modals.push(modal);
  }

  remove(id: string) {
    const modal = _.findWhere(this.modals, {id : id});
    this.modals = _.without(this.modals, modal);
  }

  open(id: string) {
    const modal = _.findWhere(this.modals, {id: id});
    modal.open();
  }

  close(id: string) {
    const modal = _.findWhere(this.modals, {id: id});
    modal.close();
  }
}
