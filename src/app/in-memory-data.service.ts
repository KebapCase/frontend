import {Event} from './models/Event';

export class InMemoryDataService {

  static id = 124;
  private static eventsByIds: Map<number, Event> = new Map([
    [120, new Event('desdefwf', 'weewwtew', 2, 'ew')],
    [121, new Event('wetrehtrjt', 'wetew', 1, 'ewrwer')],
    [122, new Event('weghnstrjyu', 'ewgdsgdg', 2, 'werwer')],
    [123, new Event('wegtwetew', 'wetewtw', 4, 'werewr')]]);

  public static pushEvent(e: Event) {
    InMemoryDataService.id++;
    InMemoryDataService.eventsByIds.set(InMemoryDataService.id, e);
  }

  public static getEvents(): Event[] {
    return Array.from(InMemoryDataService.eventsByIds.values());
  }

  public static getEvent(id: number): Event {
    return InMemoryDataService.eventsByIds.get(id);
  }

}
