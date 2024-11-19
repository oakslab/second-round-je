// NotificationContainer.tsx
import React, { useEffect, useState } from "react";
import { notificationService } from "./notification.service.ts";
import { Notification, NotificationEvent } from "./notification.types.ts";
import { Alert, Snackbar } from "@mui/material";

export const NotificationContainer: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const unsubscribe = notificationService.subscribe(
      (event: NotificationEvent) => {
        const { payload } = event;
        const newNotification: Notification = {
          ...payload,
          id: crypto.randomUUID(),
          isVisible: true,
        };

        setNotifications((prev) => [...prev, newNotification]);

        // Auto remove notification
        setTimeout(() => {
          setNotifications((prev) =>
            prev.filter((n) => n.id !== newNotification.id),
          );
        }, payload.duration);
      },
    );

    return () => unsubscribe();
  }, []);

  const handleClose = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {notifications.map(({ id, message, type, isVisible }) => (
        <Snackbar
          key={id}
          open={isVisible}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            severity={type}
            onClose={() => handleClose(id)}
            className="min-w-[300px] shadow-lg"
          >
            {message}
          </Alert>
        </Snackbar>
      ))}
    </div>
  );
};
