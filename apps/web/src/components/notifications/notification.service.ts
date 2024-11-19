import { NotificationEvent, NotificationType } from "./notification.types.ts";
import { EventBus, EventCallback } from "../../services/eventBus.ts";

export class NotificationService {
  private static instance: NotificationService;
  private eventBus: EventBus;
  private defaultDuration: number = 5000;

  private constructor() {
    this.eventBus = new EventBus();
  }

  public static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  public show(
    message: string,
    type: NotificationType = "info",
    duration?: number,
  ): void {
    this.eventBus.emit<NotificationEvent>("notification", {
      type: "notification",
      payload: {
        message,
        type,
        duration: duration || this.defaultDuration,
      },
    });
  }

  public success(message: string, duration?: number): void {
    this.show(message, "success", duration);
  }

  public error(message: string, duration?: number): void {
    this.show(message, "error", duration);
  }

  public warning(message: string, duration?: number): void {
    this.show(message, "warning", duration);
  }

  public info(message: string, duration?: number): void {
    this.show(message, "info", duration);
  }

  public subscribe(callback: EventCallback<NotificationEvent>): () => void {
    return this.eventBus.subscribe("notification", callback);
  }

  public setDefaultDuration(duration: number): void {
    this.defaultDuration = duration;
  }
}

export const notificationService = NotificationService.getInstance();
