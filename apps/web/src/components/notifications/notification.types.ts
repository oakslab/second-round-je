// types.ts
export type NotificationType = "success" | "error" | "warning" | "info";

export interface NotificationPayload {
  message: string;
  type: NotificationType;
  duration?: number;
}

export interface Notification extends NotificationPayload {
  id: string;
  isVisible: boolean;
}

export interface NotificationEvent {
  type: "notification";
  payload: NotificationPayload;
}
