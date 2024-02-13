import React from "react";

import Notification from "../interfaces/notification";

interface NotificationListProps {
  items: Notification[];
  onRemoveNotification:(id:number) => void
}

const NotificationList = ({ items,onRemoveNotification }: NotificationListProps) => {
  return (
    <ul className='list-group'>
      {items.map((item) => (
        <li className='list-group-item' key={item.id}>
          {item.title}
          <button onClick={() => onRemoveNotification(item.id)} className="btn btn-outline-danger mx-2 rounded-pill">Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default NotificationList;
