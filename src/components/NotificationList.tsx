import React from 'react'

import Notification from '../interfaces/notification'


interface NotificationListProps {
    items:Notification[]
}

const NotificationList = ({items}:NotificationListProps) => {
  return (
    <ul className='list-group'>
        {items.map(item => <li className='list-group-item'  key={item.id}>{item.title}</li>)}
    </ul>
  )
}

export default NotificationList