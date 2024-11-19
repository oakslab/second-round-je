// eventBus.ts
export type EventCallback<T> = (data: T) => void;

export class EventBus {
  private listeners: Map<string, EventCallback<any>[]>;

  constructor() {
    this.listeners = new Map();
  }

  subscribe<T>(event: string, callback: EventCallback<T>): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    const eventListeners = this.listeners.get(event)!;
    eventListeners.push(callback);

    return () => {
      const idx = eventListeners.indexOf(callback);
      if (idx > -1) {
        eventListeners.splice(idx, 1);
      }
    };
  }

  emit<T>(event: string, data: T): void {
    const eventListeners = this.listeners.get(event);
    if (eventListeners) {
      eventListeners.forEach((callback) => callback(data));
    }
  }
}
