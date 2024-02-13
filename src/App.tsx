import { useState } from "react";
import NotificationList from "./components/NotificationList";
import Notification from "./interfaces/notification";

function App() {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, title: "Notification 1" },
  ]);
  return (
    <div className='App'>
      <NotificationList items={notifications}></NotificationList>
    </div>
  );
}

export default App;
