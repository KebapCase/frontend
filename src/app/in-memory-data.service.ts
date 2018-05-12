import {CustomEvent} from './models/event';

export class InMemoryDataService {

  static id = 124;
  private static eventsByIds: Map<number, CustomEvent> = new Map([
    [120, new CustomEvent('Football', "Let's play", 2, 'assets/img/faces/football.jpg')],
    [121, new CustomEvent('Marathon', 'Run hard', 1, 'assets/img/faces/marathon.jpg')],
    [122, new CustomEvent('Strikeball', "I'm not in danger, I am the danger", 2, 'assets/img/faces/strikeball.jpg')],
    [123, new CustomEvent('Open Air', 'Have fun', 4, 'assets/img/faces/openair.jpg')]]);

  public static pushEvent(e: CustomEvent) {
    InMemoryDataService.id++;
    InMemoryDataService.eventsByIds.set(InMemoryDataService.id, e);
  }

  public static getEvents(): CustomEvent[] {
    return Array.from(InMemoryDataService.eventsByIds.values());
  }

  public static getEvent(id: number): CustomEvent {
    return InMemoryDataService.eventsByIds.get(id);
  }

}
