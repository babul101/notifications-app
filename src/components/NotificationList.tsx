import React from 'react'

import Notification from '../interfaces/notification'


interface NotificationListProps {
    items:Notification[]
}

const NotificationList = ({items}:NotificationListProps) => {
  return (
    <ul>
        {items.map(item => <li key={item.id}>{item.title}</li>)}
    </ul>
  )
}

export default NotificationList