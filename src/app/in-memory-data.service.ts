import {CustomEvent} from './models/event';

export class InMemoryDataService {

  static id = 124;
  private static eventsByIds: Map<number, CustomEvent> = new Map([
    [120, new CustomEvent('desdefwf', 'weewwtew', 2, 'ew')],
    [121, new CustomEvent('wetrehtrjt', 'wetew', 1, 'ewrwer')],
    [122, new CustomEvent('weghnstrjyu', 'ewgdsgdg', 2, 'werwer')],
    [123, new CustomEvent('wegtwetew', 'wetewtw', 4, 'werewr')]]);

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
