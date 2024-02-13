import { useEffect, useState } from "react";
import NotificationList from "./components/NotificationList";
import Notification from "./interfaces/notification";
import notificationService from "./services/notification";

function App() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    const notifications = await notificationService.getNotifications();
    setNotifications(notifications);
  };

  return (
    <div className='App'>
      <NotificationList items={notifications}></NotificationList>
    </div>
  );
}

export default App;
