import { useEffect, useState } from "react";
import NotificationList from "./components/NotificationList";
import Notification from "./interfaces/notification";
import notificationService from "./services/notification";
import NewNotification from "./components/NewNotification";

function App() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    const notifications = await notificationService.getNotifications();
    setNotifications(notifications);
  };

  const removeNotification = (id: number) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className='App'>
      <NewNotification />
      <NotificationList
        onRemoveNotification={removeNotification}
        items={notifications}
      ></NotificationList>
    </div>
  );
}

export default App;
